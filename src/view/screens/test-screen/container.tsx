import React, { FC } from 'react'

import { UC } from '@usecases'
import { TestScreenComponent } from './component'
import { useObservableState } from 'observable-hooks'


export const TestScreenContainer: FC = () => {
  const { name } = useObservableState(UC.TestController.getTestServiceState())

  return (
    <TestScreenComponent
      name={ name }
      onSubmit={ UC.TestController.setName }
    />
  )
}

export { TestScreenContainer as TestScreen }
