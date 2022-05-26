import { IsDefined, IsNumber, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IIncomingFileDtm {
  id: string
  name: string
  uploadDate: string
  size: number
}

export class IncomingFileDtm implements IIncomingFileDtm {
  @IsDefined()
  @IsString()
  id: string

  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsString()
  uploadDate: string

  @IsDefined()
  @IsNumber()
  size: number

  static fromPlain = (input: IIncomingFileDtm) => plainToClass(IncomingFileDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
