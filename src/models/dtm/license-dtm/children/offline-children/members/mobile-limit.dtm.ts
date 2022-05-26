import { IsDefined, IsNumber, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'

import { LicensePlan } from './enums'


export interface IOfflineLimitDtm {
  used: number
  paid: number
}

export class MobileLimitDtm implements IOfflineLimitDtm {
  @IsDefined()
  @IsNumber()
  used: number

  @IsDefined()
  @IsNumber()
  paid: number

  static fromPlain = (input: IOfflineLimitDtm) => plainToClass(MobileLimitDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0

  getPlan = (): LicensePlan => {
    if (this.paid === 0) {
      return LicensePlan.ENTERPRISE
    }

    if (this.paid <= 1000) {
      return LicensePlan.BASIC
    }

    if (this.paid <= 20000) {
      return LicensePlan.ADVANCED
    }

    return LicensePlan.PRO
  }
}
