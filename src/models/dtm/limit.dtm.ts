import { IsDefined, IsNumber, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface ILimitDtm {
  used: number
  paid: number
}

export class LimitDtm implements ILimitDtm {
  @IsDefined()
  @IsNumber()
  used: number

  @IsDefined()
  @IsNumber()
  paid: number

  static fromPlain = (input: LimitDtm) => plainToClass(LimitDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
