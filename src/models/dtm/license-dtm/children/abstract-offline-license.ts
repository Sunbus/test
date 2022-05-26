import { ILicensePrototype, LicensePrototype } from '../license-prototype'
import { LicenseType } from '@models/dtm'


export interface IAbstractOfflineLicense extends ILicensePrototype {
  type: LicenseType.OFFLINE
}

export abstract class AbstractOfflineLicense extends LicensePrototype implements IAbstractOfflineLicense {
  readonly type = LicenseType.OFFLINE
}
