import { IsDefined, IsString, ValidateNested, validateSync } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { ICountryPropertiesDtm, CountryPropertiesDtm } from './properties.dtm'


export interface ICountryGeoDtm {
  type: string
  geometry: {
    type: string
    coordinates: [number, number]
  }
  properties: ICountryPropertiesDtm
}

export class CountryGeoDtm implements ICountryGeoDtm {
  @IsDefined()
  @IsString()
  type: string

  @IsDefined()
  geometry: {
    type: string
    coordinates: number[]
  }

  @IsDefined()
  @ValidateNested()
  @Type(() => CountryPropertiesDtm)
  properties: CountryPropertiesDtm

  static fromPlain = (input: ICountryGeoDtm) => plainToClass<CountryGeoDtm, ICountryGeoDtm>(CountryGeoDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
