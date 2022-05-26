import 'reflect-metadata' // important for TypeDI

import React from 'react'
import { render } from 'react-dom'

import { App } from '@view/index'
import './styles.module.less'


const main = async () => {
  // basic configuration
  const rootElement: HTMLElement | null = document.getElementById('root')

  render(<App />, rootElement)
}

void main()
