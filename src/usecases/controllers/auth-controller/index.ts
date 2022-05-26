import { TestService, R } from '@repository'
import { ITestController } from '@usecases'


export class TestController implements ITestController{
  // Sign Up functionality
  setName = (newName: string) => {
    R.get(TestService).setName(newName)

    console.log('New name: ' + newName)
  }

  // State getters
  getTestServiceState = () => R.get(TestService).state$
}
