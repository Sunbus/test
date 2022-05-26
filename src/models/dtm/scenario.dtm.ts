import { IsDefined, IsNumber, IsString, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IScenarioDtm {
  scenario: string
  quantity: number
}

export class ScenarioDtm implements IScenarioDtm {
  @IsDefined()
  @IsString()
  scenario: string

  @IsDefined()
  @IsNumber()
  quantity: number

  static fromPlain = (input: IScenarioDtm) => plainToClass(ScenarioDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
