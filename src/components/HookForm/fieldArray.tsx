import React, { FC } from 'react'
import { useFieldArray } from 'react-hook-form'
import NestedArray from './nestedFieldArray'

let renderCount = 0

const Fields: FC<any> = ({ control, register, setValue, getValues }: any) => {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'test'
  })

  renderCount++

  return (
    <>
      <ul>
        {fields.map((item: any, index) => {
          return (
            <li key={item.id}>
              <input
                name={`test[${index}].name`}
                ref={register()}
                defaultValue={item.name}
              />
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          )
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: 'append' })
          }}
        >
          append
        </button>

        <button
          type="button"
          onClick={() => {
            setValue('test', [
              ...getValues().test,
              {
                name: 'append',
                nestedArray: [{ field1: 'append', field2: 'append' }]
              }
            ])
          }}
        >
          Append Nested
        </button>

        <button
          type="button"
          onClick={() => {
            prepend({ name: 'append' })
          }}
        >
          prepend
        </button>

        <button
          type="button"
          onClick={() => {
            setValue('test', [
              {
                name: 'append',
                nestedArray: [{ field1: 'Prepend', field2: 'Prepend' }]
              },
              ...getValues().test
            ])
          }}
        >
          prepend Nested
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  )
}

export default Fields
