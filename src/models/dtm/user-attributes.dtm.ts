import { IsBoolean, IsDefined, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IUserAttributesDtm {
  isFilePrivacyAccepted: boolean
}

export class UserAttributesDtm implements IUserAttributesDtm {
  @IsDefined()
  @IsBoolean()
  isFilePrivacyAccepted: boolean

  static fromPlain = (input: IUserAttributesDtm) => plainToClass<UserAttributesDtm, IUserAttributesDtm>(UserAttributesDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
