import { LicenseType } from '../enums'
import { ILicensePrototype, LicensePrototype } from '../license-prototype'
import { OnlineLicenseType } from '@models/dtm'


export interface IAbstractOnlineLicense extends ILicensePrototype {
  type: LicenseType.ONLINE
  onlineType: OnlineLicenseType
}

export abstract class AbstractOnlineLicense extends LicensePrototype implements IAbstractOnlineLicense {
  readonly type = LicenseType.ONLINE
  readonly onlineType: OnlineLicenseType
}
