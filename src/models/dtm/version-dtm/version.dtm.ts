import { IsDefined, IsString, ValidateNested, validateSync } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import { IVersionDataDtm, VersionDataDtm } from './children'


export interface IVersionDtm {
  version: string
  data: IVersionDataDtm[]
}

export interface IVersionFlatDtm extends IVersionDataDtm {
  version: string
}

export class VersionDtm implements IVersionDtm {
  @IsDefined()
  @IsString()
  version: string

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => VersionDataDtm)
  data: VersionDataDtm[]

  flatten = (): IVersionFlatDtm[] => {
    return (this.data || []).map((row: VersionDataDtm) => ({ ...row, version: this.version }))
  }

  static fromPlain = (input: IVersionDtm) => plainToClass(VersionDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
