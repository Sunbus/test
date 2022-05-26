import { map, Observable } from 'rxjs'
import { Service } from 'typedi'

import { ProtoState } from '../service.proto'
import { ITestServiceState } from './interfaces'


const defaultState: ITestServiceState = {
  name: undefined,
}

@Service<TestService>()
export class TestService extends ProtoState<ITestServiceState> {
  constructor() {
    super(defaultState)
  }

  setName = (newName: string) => {
    this.push({
      name: newName,
    })
  }
}
