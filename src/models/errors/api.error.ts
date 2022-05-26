import { IsDefined, IsIn, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'

import { ApiErrors } from '@models/enums'


const ALL_ERROR_CODES = [
  ApiErrors.BAD_REQUEST,
  ApiErrors.NOT_AUTHORIZED,
  ApiErrors.FORBIDDEN,
  ApiErrors.VALIDATION_ERROR,
  ApiErrors.INTERNAL_SERVER_ERROR,
  ApiErrors.BAD_GATEWAY,
  ApiErrors.SERVICE_UNAVAILABLE,
]

export interface IApiError extends Error {
  code?: ApiErrors
}

export class ApiError extends Error implements IApiError {
  @IsDefined()
  @IsIn(ALL_ERROR_CODES)
  code: ApiErrors

  static fromPlain = (input: IApiError) => {
    if (!input.code || !ALL_ERROR_CODES.includes(input.code)) {
      throw new Error('Unknown error code.')
    }

    return plainToClass<ApiError, IApiError>(ApiError, input)
  }

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
