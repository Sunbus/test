import { plainToClass } from 'class-transformer'
import { IsDefined, IsInt, IsNumber, IsPositive, IsString, Max, Min, validateSync } from 'class-validator'

import { IOutgoingFileBaseMethods, IOutgoingFileBaseProperties } from '../interfaces'
import { OutgoingFileBaseDtm } from '../outgoing-file-base.dtm'


export interface IUploadInProgressOutgoingFileDtm extends IOutgoingFileBaseProperties {
  size: number
  progress: number
}

export class UploadInProgressOutgoingFileDtm
  extends OutgoingFileBaseDtm<UploadInProgressOutgoingFileDtm>
  implements IUploadInProgressOutgoingFileDtm, IOutgoingFileBaseMethods {
  @IsDefined()
  @IsString()
  id: string

  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsInt()
  @IsPositive()
  size: number

  @IsDefined()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  @Max(100)
  progress: number

  static fromPlain = (input: IUploadInProgressOutgoingFileDtm) => plainToClass(UploadInProgressOutgoingFileDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  canBeDeleted = () => false
  hasError = () => false

  getIndexationString = () => {
    let text = ''

    text += ` ${this.id}`
    text += ` ${this.name}`

    return text
  }
}
