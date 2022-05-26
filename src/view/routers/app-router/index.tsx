import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { TestScreen } from '@view/screens/test-screen'


export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <TestScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}
