import { IsDefined, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IPropertiesDtm {
  name: string
  iso_a2: string
}

export class PropertiesDtm implements IPropertiesDtm {
  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsString()
  iso_a2: string

  static fromPlain = (input: IPropertiesDtm) => plainToClass<PropertiesDtm, IPropertiesDtm>(PropertiesDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
