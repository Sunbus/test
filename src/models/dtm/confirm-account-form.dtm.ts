import { IsDefined, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IConfirmAccountFormDtm {
  password: string
  passwordConfirm: string
}

export class ConfirmAccountFormDtm implements IConfirmAccountFormDtm {
  @IsDefined()
  @IsString()
  password: string

  @IsDefined()
  @IsString()
  passwordConfirm: string

  static fromPlain = (input: IConfirmAccountFormDtm) => plainToClass(ConfirmAccountFormDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  // Special methods

  isPasswordsEqual = () => this.password === this.passwordConfirm
}
