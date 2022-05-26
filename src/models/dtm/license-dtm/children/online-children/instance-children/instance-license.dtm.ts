import { LicenseUnit, OnlineLicenseType } from '@models/dtm'
import { AbstractOnlineLicense } from '../../abstract-online-license'


export class InstanceLicenseDtm extends AbstractOnlineLicense {
  readonly unit = LicenseUnit.INSTANCE
  readonly onlineType = OnlineLicenseType.INSTANCE
}
