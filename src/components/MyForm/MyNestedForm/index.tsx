import { FC } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'

interface IProps {
  control: any
  register: any
  parentIndex: number
}

export const ProductModelList: FC<IProps> = ({
  control,
  register,
  parentIndex
}: IProps): JSX.Element => {
  const { fields: modelFields, append: appendModels } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: `products.${parentIndex}.models` // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  })

  return (
    <div
      style={{
        border: '1px solid #000',
        borderRadius: 10,
        margin: 10,
        boxSizing: 'border-box',
        padding: 10
      }}
    >
      {modelFields.map(
        (mf: any, index: number): JSX.Element => (
          <div key={mf.id}>
            <p>Color:</p>
            <input
              type="text"
              {...register(`products.${parentIndex}.models.${index}.color`)}
            />
          </div>
        )
      )}

      <button
        onClick={(): void =>
          appendModels({
            color: ''
          })
        }
      >
        Add new model
      </button>
    </div>
  )
}
