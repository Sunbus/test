import React, { FC, FormEvent } from 'react'

import * as styles from './styles.module.less'


interface ITestScreenProps {
  name: string;
  onSubmit: (newName: string) => void;
}

export const TestScreenComponent: FC<ITestScreenProps> = ({ name, onSubmit }) => {
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const a = event.currentTarget[0]

    onSubmit(event.currentTarget[0].value)
  }

  return (
    <main className={ styles.container }>
      <form className={ styles.form } onSubmit={ onSubmitHandler }>
        <label htmlFor="name">Input some name here</label>
        <input id="name" type="text" />

        <button type="submit">Apply</button>
      </form>

      <br />
      <br />

      <div>Current Name => {name}</div>
    </main>
  )
}
