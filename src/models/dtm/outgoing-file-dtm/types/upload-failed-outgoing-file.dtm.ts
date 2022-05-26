import { plainToClass } from 'class-transformer'
import { IsDefined, IsString, validateSync } from 'class-validator'

import { IOutgoingFileBaseMethods, IOutgoingFileBaseProperties } from '../interfaces'
import { OutgoingFileBaseDtm } from '../outgoing-file-base.dtm'


export interface IUploadFailedOutgoingFileDtm extends IOutgoingFileBaseProperties {
  uploadDate: string
}

export class UploadFailedOutgoingFileDtm
  extends OutgoingFileBaseDtm<UploadFailedOutgoingFileDtm>
  implements IUploadFailedOutgoingFileDtm, IOutgoingFileBaseMethods {
  @IsDefined()
  @IsString()
  id: string

  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsString()
  uploadDate: string

  static fromPlain = (input: IUploadFailedOutgoingFileDtm) => plainToClass(UploadFailedOutgoingFileDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  canBeDeleted = () => true
  hasError = () => true

  getIndexationString = () => {
    let text = ''

    text += ` ${this.id}`
    text += ` ${this.name}`
    text += ` ${this.uploadDate}`

    return text
  }
}
