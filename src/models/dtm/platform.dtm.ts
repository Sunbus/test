import { IsIn, IsOptional, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'

import { OsType } from '@models/enums'


export interface IPlatformDtm {
  app_id?: string
  os?: OsType
}

export class PlatformDtm implements IPlatformDtm {
  @IsOptional()
  @IsString()
  app_id?: string

  @IsOptional()
  @IsIn(Object.values(OsType))
  os?: OsType

  static fromPlain = (input: IPlatformDtm) => plainToClass(PlatformDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
