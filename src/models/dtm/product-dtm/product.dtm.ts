import { IsArray, IsDefined, IsIn, IsString, ValidateNested, validateSync } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { ILimitDtm, IPlatformExtendedDtm, LimitDtm, PlatformExtendedDtm } from '@models/dtm'
import { ProductId } from './enums'


export interface IProductDtm {
  id: ProductId
  modules: string[]
  limit: ILimitDtm
  platforms: IPlatformExtendedDtm[]
  createdAt: string
  expiresAt: string
}

export class ProductDtm implements IProductDtm {
  @IsDefined()
  @IsIn(Object.values(ProductId))
  id: ProductId

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  modules: string[]

  @IsDefined()
  @ValidateNested()
  @Type(() => LimitDtm)
  limit: LimitDtm

  @IsDefined()
  @ValidateNested()
  @Type(() => PlatformExtendedDtm)
  platforms: PlatformExtendedDtm[]

  @IsDefined()
  @IsString()
  createdAt: string

  @IsDefined()
  @IsString()
  expiresAt: string

  static fromPlain = (input: IProductDtm) => plainToClass(ProductDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  // Special methods
  isOverused = () => ((this.limit.used || 0) > (this.limit.paid || 0))

  getExtra = () => this.isOverused()
    ? ~~((this.limit.used || 0) - (this.limit.paid || 0))
    : 0

  getPlatforms = (appId?: string) => {
    return this.platforms.filter(i => i.app_id === appId)
  }

  getOsTypes = (appId?: string) => {
    return this.platforms
        .filter((platform) => !appId || platform.app_id === appId)
        .map((platform) => platform.os)
        .filter((value, i, arr) => arr.indexOf(value) === i)
      || []
  }

  getUsedPercentage = () => {
    const extra = this.getExtra()
    let percent = 0

    if (this.limit.used && this.limit.paid) {
      if (extra > 0) {
        const total = extra + this.limit.paid

        if (total === 0) {
          percent = 100
        } else {
          percent = this.limit.paid * 100 / total
        }
      } else {
        if (this.limit.paid === 0) {
          percent = 100
        } else {
          percent = this.limit.used * 100 / this.limit.paid
        }
      }
    }

    return percent
  }
}
