import { AbstractOnlineLicense } from '../../abstract-online-license'
import { LicenseUnit } from '../../../enums'


export abstract class AbstractTransactionalLicense extends AbstractOnlineLicense {
  readonly unit = LicenseUnit.TRANSACTION
}
