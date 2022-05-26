import { IsDefined, IsOptional, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface ILicenseMetadataDtm {
  managerId: string
  managerName?: string
  project?: string
  customerName: string
}

export class LicenseMetadataDtm implements ILicenseMetadataDtm {
  @IsDefined()
  @IsString()
  managerId: string

  @IsOptional()
  @IsString()
  managerName?: string

  @IsOptional()
  @IsString()
  project?: string

  @IsDefined()
  @IsString()
  customerName: string

  static fromPlain = (input: ILicenseMetadataDtm) => plainToClass(LicenseMetadataDtm, input)

  isValid = () => validateSync(this).length === 0

  validate = () => validateSync(this)
}
