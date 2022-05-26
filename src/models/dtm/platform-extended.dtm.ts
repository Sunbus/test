import { IsDefined, IsIn, IsNumber, IsOptional, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'

import { OsType } from '@models/enums'


export interface IPlatformExtendedDtm {
  app_id: string
  os: OsType
  countries: number
  transactions?: number // not available for user based licenses
  users?: number // not available for instance based licenses
}

export class PlatformExtendedDtm implements IPlatformExtendedDtm {
  @IsDefined()
  @IsString()
  app_id: string

  @IsDefined()
  @IsIn(Object.values(OsType))
  os: OsType

  @IsDefined()
  @IsNumber()
  countries: number

  @IsOptional()
  @IsNumber()
  transactions?: number

  @IsOptional()
  @IsNumber()
  users?: number

  static fromPlain = (input: IPlatformExtendedDtm) => plainToClass(PlatformExtendedDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
