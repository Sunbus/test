import { IsBoolean, IsDefined, IsEmail, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface ISignUpDtm {
  email: string
  firstname: string
  lastname: string
  country: string
  isTermsAccepted: boolean
  isSubscribed: boolean
}

export class SignUpDtm implements ISignUpDtm {
  @IsDefined()
  @IsEmail()
  email: string

  @IsDefined()
  @IsString()
  firstname: string

  @IsDefined()
  @IsString()
  lastname: string

  @IsDefined()
  @IsString()
  country: string

  @IsDefined()
  @IsBoolean()
  isTermsAccepted: boolean

  @IsDefined()
  @IsBoolean()
  isSubscribed: boolean

  static fromPlain = (input: ISignUpDtm) => plainToClass(SignUpDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
