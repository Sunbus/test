import { IsDefined, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface ISignInDtm {
  login: string
  password: string
}

export class SignInDtm implements ISignInDtm {
  @IsDefined()
  @IsString()
  login: string

  @IsDefined()
  @IsString()
  password: string

  static fromPlain = (input: ISignInDtm) => plainToClass(SignInDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
