import { AbstractTransactionalLicense } from '../abstract-transactional-license'
import { OnlineLicenseType } from '@models/dtm'


export class DemoLicenseDtm extends AbstractTransactionalLicense  {
  readonly onlineType = OnlineLicenseType.DEMO
}
