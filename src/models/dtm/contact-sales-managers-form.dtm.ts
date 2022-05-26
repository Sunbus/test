import { IsDefined, IsEmail, IsOptional, IsPhoneNumber, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IContactSalesManagersFormDtm {
  companyName: string
  email: string
  estimatedVerificationsAnnually: string
  jobTitle: string
  message: string
  name: string

  companyType?: string
  industry?: string
  phone?: string
}

export class ContactSalesManagersFormDtm implements IContactSalesManagersFormDtm {
  @IsDefined()
  @IsString()
  companyName: string

  @IsDefined()
  @IsEmail()
  email: string

  @IsDefined()
  @IsString()
  estimatedVerificationsAnnually: string

  @IsDefined()
  @IsString()
  jobTitle: string

  @IsDefined()
  @IsString()
  message: string

  @IsDefined()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  companyType?: string

  @IsOptional()
  @IsString()
  industry?: string

  @IsOptional()
  @IsPhoneNumber()
  phone?: string

  static fromPlain = (input: IContactSalesManagersFormDtm) => plainToClass(ContactSalesManagersFormDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
