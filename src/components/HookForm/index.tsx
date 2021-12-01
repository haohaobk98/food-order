import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import FieldArray from './fieldArray'
import ReactDOM from 'react-dom'

import './styles.css'

const defaultValues = {
  test: [
    {
      name: 'useFieldArray1',
      nestedArray: [{ field1: 'field1', field2: 'field2' }]
    },
    {
      name: 'useFieldArray2',
      nestedArray: [{ field1: 'field1', field2: 'field2' }]
    }
  ]
}

export const FormHook: FC = () => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    reset,
    setValue
  } = useForm({
    defaultValues
  })
  const onSubmit = (data: any) => console.log('data', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue }}
      />

      <input type="submit" />
    </form>
  )
}
