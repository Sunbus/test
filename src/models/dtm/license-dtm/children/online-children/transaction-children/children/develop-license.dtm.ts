import { AbstractTransactionalLicense } from '../abstract-transactional-license'
import { OnlineLicenseType } from '@models/dtm'


export class DevelopLicenseDtm extends AbstractTransactionalLicense {
  readonly onlineType = OnlineLicenseType.DEVELOP
}
