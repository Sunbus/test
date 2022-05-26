import { AxiosError } from 'axios'


export interface IApiErrorContract {
  code: string
  error: string | null
  message: string
}

export const isApiError = (error: AxiosError): error is AxiosError<IApiErrorContract> => {
  if (!error.response) {
    return false
  }

  if (!error.response.data || typeof error.response.data !== 'object') {
    return false
  }

  if (!error.response.data['code'] || !error.response.data['message']) {
    return false
  }

  return true
}
