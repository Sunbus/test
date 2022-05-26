import {
  TrialLicenseDtm,
  MobileLicenseDtm,
  InstanceLicenseDtm,
  DevelopLicenseDtm,
  ProductionLicenseDtm, DemoLicenseDtm,
} from './children'


export type LicenseUnionDtm = DemoLicenseDtm | TrialLicenseDtm | MobileLicenseDtm | InstanceLicenseDtm | DevelopLicenseDtm | ProductionLicenseDtm
export type ILicenseUnionDtm = typeof DemoLicenseDtm | typeof TrialLicenseDtm | typeof MobileLicenseDtm | typeof InstanceLicenseDtm | typeof DevelopLicenseDtm | typeof ProductionLicenseDtm
