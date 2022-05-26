import { AbstractTransactionalLicense } from '../abstract-transactional-license'
import { OnlineLicenseType } from '@models/dtm'


export class TrialLicenseDtm extends AbstractTransactionalLicense  {
  readonly onlineType = OnlineLicenseType.TRIAL

}
