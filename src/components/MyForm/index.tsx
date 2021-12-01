/* eslint-disable */

import { FC, useEffect, useMemo, useState } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { FormHook } from '../HookForm'

import { ProductModelList } from './MyNestedForm'

interface IProps { }

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
      name: 'test2',
      nestedArray: [
        { field1: 'field1' },
        { field2: 'field2' }
      ]
    }
  ]
}

const onSubmit = (data: any): void => {
  console.log(data)
}

export const MyForm: FC<IProps> = (props: IProps): JSX.Element => {

  const { register, control, handleSubmit } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'food'
  })

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
          // rules={{
          //   required: { value: true, message: 'Nhập  đi má' },
          //   minLength: { value: 2, message: 'Min length = 2 nha )))' }
          // }}
          render={({ field }: any): any => <input {...field} />}
        />

        {/* {errors.userName && <span>{errors.userName.message}</span>} */}

        {fields.map(
          (field: any, index: number): JSX.Element => (
            <div key={field.id}>
              <h2>Product: {index + 1}</h2>
              <p>Name:</p>
              <input type="text" {...register(`products.${index}.name`)} />

              <p>Price:</p>
              <input type="text" {...register(`products.${index}.price`)} />

              <ProductModelList
                control={control}
                register={register}
                parentIndex={index}
              />

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
