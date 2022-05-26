import { plainToClass } from 'class-transformer'
import { IsDefined, IsInt, IsPositive, IsString, validateSync } from 'class-validator'

import { IOutgoingFileBaseMethods, IOutgoingFileBaseProperties } from '../interfaces'
import { OutgoingFileBaseDtm } from '../outgoing-file-base.dtm'


export interface IUploadedOutgoingFileDtm extends IOutgoingFileBaseProperties {
  size: number
  uploadDate: string
  userFileId: string
}

export class UploadedOutgoingFileDtm
  extends OutgoingFileBaseDtm<UploadedOutgoingFileDtm>
  implements IUploadedOutgoingFileDtm, IOutgoingFileBaseMethods {
  @IsDefined()
  @IsString()
  id: string

  @IsDefined()
  @IsString()
  userFileId: string

  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsInt()
  @IsPositive()
  size: number

  @IsDefined()
  @IsString()
  uploadDate: string

  static fromPlain = (input: IUploadedOutgoingFileDtm) => plainToClass(UploadedOutgoingFileDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  canBeDeleted = () => true
  hasError = () => false

  getIndexationString = () => {
    let text = ''

    text += ` ${this.id}`
    text += ` ${this.name}`
    text += ` ${this.uploadDate}`

    return text
  }
}
