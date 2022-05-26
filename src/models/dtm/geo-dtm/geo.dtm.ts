import { IsDefined, IsString, ValidateNested, validateSync } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { IPropertiesDtm, PropertiesDtm } from './properties.dtm'


export interface IGeoDtm {
  type: string
  geometry: {
    type: string
    coordinates: number[][][] | number[][][][]
  }
  properties: IPropertiesDtm
}

export class GeoDtm implements IGeoDtm {
  @IsDefined()
  @IsString()
  type: string

  @IsDefined()
  geometry: {
    type: string
    coordinates: number[][][] | number[][][][]
  }

  @IsDefined()
  @ValidateNested()
  @Type(() => PropertiesDtm)
  properties: IPropertiesDtm

  static fromPlain = (input: IGeoDtm) => plainToClass<GeoDtm, IGeoDtm>(GeoDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
