import { IsDefined, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IConfigDtm {
  region: string
  userPoolId: string
  userPoolWebClientId: string
  managerPoolId: string
  managerPoolWebClientId: string
  recaptchaKey: string
}

export class ConfigDtm implements IConfigDtm {
  @IsDefined()
  @IsString()
  region: string

  @IsDefined()
  @IsString()
  userPoolId: string

  @IsDefined()
  @IsString()
  userPoolWebClientId: string

  @IsDefined()
  @IsString()
  managerPoolId: string

  @IsDefined()
  @IsString()
  managerPoolWebClientId: string

  @IsDefined()
  @IsString()
  recaptchaKey: string

  static fromPlain = (input: IConfigDtm) => plainToClass<ConfigDtm, IConfigDtm>(ConfigDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
