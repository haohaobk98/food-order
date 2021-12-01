/* eslint-disable */

import { FC, useEffect, useMemo, useState } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'

interface IProps { }

export const MyForm: FC<IProps> = (props: IProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm()

  const defaultValue = {
    test: [
      {
        name: 'test1',
        nestedArray: [
          { field1: 'field1' },
          { field2: 'field2' }
        ]
      },
      {
        name: 'test1',
        nestedArray: [
          { field1: 'field1' },
          { field2: 'field2' }
        ]
      }
    ]
  }
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'products' // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  )

  const { fields: modelFields, append: appendModels } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'models' // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  })

  const onSubmit = (data: any): void => {
    console.log(data)
  }

  useEffect((): void => {
    append({
      name: 'iphone 13',
      price: '2000'
    })
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>User name</p>
        {/* <input
          type="text"
          {...register('userName', { required: 'Ten message', minLength: 2 })}
        /> */}
        <Controller
          name="userName"
          control={control}
          rules={{
            required: { value: true, message: 'Nhập  đi má' },
            minLength: { value: 2, message: 'Min length = 2 nha )))' }
          }}
          render={({ field }: any): any => <input {...field} />}
        />

        {errors.userName && <span>{errors.userName.message}</span>}

        {fields.map(
          (field: any, index: number): JSX.Element => (
            <div key={field.id}>
              <h2>Product: {index + 1}</h2>
              <p>Name:</p>
              <input type="text" {...register(`products.${index}.name`)} />

              <p>Price:</p>
              <input type="text" {...register(`products.${index}.price`)} />

              <hr />
            </div>
          )
        )}

        <button
          onClick={(): void =>
            append({
              name: '',
              price: ''
            })
          }
        >
          Add new product
        </button>

        <button>Submit</button>
      </form>
    </div>
  )
}
