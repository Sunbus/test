import { IsDefined, IsEmail, IsString, validateSync, } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IChangePasswordDtm {
  email: string
  password: string
  passwordConfirm: string
}

export class ChangePasswordDtm implements IChangePasswordDtm {
  @IsDefined()
  @IsEmail()
  email: string

  @IsDefined()
  @IsString()
  password: string

  @IsDefined()
  @IsString()
  passwordConfirm: string

  static fromPlain = (input: IChangePasswordDtm) => plainToClass(ChangePasswordDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  // Special methods

  isPasswordsEqual = () => this.password === this.passwordConfirm
}
