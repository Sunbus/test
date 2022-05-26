import { IsDefined, IsNumber, IsOptional, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IVersionDataDtm {
  ip?: string
  country: string
  active_instances?: number
  instances?: number
  passive_instances?: number
}

export class VersionDataDtm implements IVersionDataDtm {
  @IsOptional()
  @IsString()
  ip?: string

  @IsDefined()
  @IsString()
  country: string

  @IsOptional()
  @IsNumber()
  active_instances?: number

  @IsOptional()
  @IsNumber()
  instances?: number

  @IsOptional()
  @IsNumber()
  passive_instances?: number

  static fromPlain = (input: IVersionDataDtm) => plainToClass(VersionDataDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
