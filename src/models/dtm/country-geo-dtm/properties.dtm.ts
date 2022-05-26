import { IsDefined, IsNumber, IsString, validateSync, IsOptional } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface ICountryPropertiesDtm {
  name: string
  iso_a2: string
  transactions: number
}

export class CountryPropertiesDtm implements ICountryPropertiesDtm {
  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsString()
  iso_a2: string

  @IsOptional()
  @IsNumber()
  transactions: number

  static fromPlain = (input: ICountryPropertiesDtm) => plainToClass<CountryPropertiesDtm, ICountryPropertiesDtm>(CountryPropertiesDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
