import { plainToClass, Type } from 'class-transformer'
import { IsDefined, IsIn, IsNumber, IsOptional, IsString, ValidateNested, validateSync } from 'class-validator'

import {
  IProductDataVectors,
  PlatformExtendedDtm,
  ProductDataVectors,
  ProductId,
  ScenarioDtm,
  VersionDtm
} from '@models/dtm'


export interface IProductItemDtm {
  id: ProductId
  used: number
  limit: number
  startDate: string
  endDate: string
  capabilities: string[]
  platforms: PlatformExtendedDtm[]
  versions: VersionDtm[]
  scenarios: ScenarioDtm[]
  data?: IProductDataVectors
  limitExitedAt?: string
}

export class ProductItemDtm implements IProductItemDtm {
  @IsDefined()
  @IsIn(Object.values(ProductId))
  id: ProductId

  @IsDefined()
  @IsNumber()
  used: number

  @IsDefined()
  @IsNumber()
  limit: number

  @IsDefined()
  @IsString()
  startDate: string

  @IsDefined()
  @IsString()
  endDate: string

  @IsDefined()
  @IsString({ each: true })
  capabilities: string[]

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductDataVectors)
  data: ProductDataVectors

  @IsDefined()
  @ValidateNested()
  @Type(() => PlatformExtendedDtm)
  platforms: PlatformExtendedDtm[]

  @IsDefined()
  @ValidateNested()
  @Type(() => VersionDtm)
  versions: VersionDtm[]

  @IsDefined()
  @ValidateNested()
  @Type(() => ScenarioDtm)
  scenarios: ScenarioDtm[]

  @IsOptional()
  @IsString()
  limitExitedAt?: string


  static fromPlain = (input: IProductItemDtm) => plainToClass(ProductItemDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  // Special methods
  isOverused = () => ((this.used || 0) > (this.limit || 0))

  getExtra = () => this.isOverused()
      ? ~~((this.used || 0) - (this.limit || 0))
      : 0

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

    if (this.used && this.limit) {
      if (extra > 0) {
        const total = extra + this.limit

        if (total === 0) {
          percent = 100
        } else {
          percent = this.limit * 100 / total
        }
      } else {
        if (this.limit === 0) {
          percent = 100
        } else {
          percent = this.used * 100 / this.limit
        }
      }
    }

    return percent
  }
}
