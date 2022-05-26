import { IsDefined, validateSync, ValidationError } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IContractError extends Error {
  name: 'ContractError'
  message: string
  errors: ValidationError[]
}

export class ContractError extends Error implements IContractError {
  name: 'ContractError' = 'ContractError'
  message: string = 'Wrong contract'

  @IsDefined()
  errors: ValidationError[]

  static fromPlain = (input: Omit<IContractError, 'name'>) =>
    plainToClass<ContractError, typeof input>(ContractError, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
