import { IsDefined, IsEmail, IsNumber, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IUserDtm {
  userId: string
  userEmail: string
  authToken: string
  authTokenExpiredIn: number
  refreshToken: string
}

export class UserDtm implements IUserDtm {
  @IsDefined()
  @IsString()
  userId: string

  @IsDefined()
  @IsEmail()
  userEmail: string

  @IsDefined()
  @IsString()
  authToken: string

  @IsDefined()
  @IsNumber()
  authTokenExpiredIn: number

  @IsDefined()
  @IsString()
  refreshToken: string

  static fromPlain = (input: IUserDtm) => plainToClass<UserDtm, IUserDtm>(UserDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
