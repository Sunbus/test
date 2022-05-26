import { IsDefined, IsNumber, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IDatabaseDtm {
  id: string
  url: string
  description: string
  version: string
  exportDate: string
  documentsNumber: number
  countriesNumber: number
}

export class DatabaseDtm implements IDatabaseDtm {
  @IsDefined()
  @IsString()
  id: string

  @IsDefined()
  @IsString()
  description: string

  @IsDefined()
  @IsString()
  url: string

  @IsDefined()
  @IsString()
  version: string

  @IsDefined()
  @IsString()
  exportDate: string

  @IsDefined()
  @IsNumber()
  documentsNumber: number

  @IsDefined()
  @IsNumber()
  countriesNumber: number

  static fromPlain = (input: IDatabaseDtm) => plainToClass(DatabaseDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
