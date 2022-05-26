import { AbstractOfflineLicense } from '../abstract-offline-license'
import { LicenseUnit } from '../../enums'


export class MobileLicenseDtm extends AbstractOfflineLicense {
  readonly unit = LicenseUnit.USER
}
