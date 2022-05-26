export interface ITestController {
  setName: (newName: string) => void;
}

export interface IUsecaseLayer {
  TestController: ITestController;
}

