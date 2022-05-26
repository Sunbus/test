import { AbstractTransactionalLicense } from '../abstract-transactional-license'
import { OnlineLicenseType } from '@models/dtm'


export class ProductionLicenseDtm extends AbstractTransactionalLicense {
  readonly onlineType = OnlineLicenseType.PRODUCTION
}
