import { FC, useState } from 'react'

import { IFood, IFoodFormItem, IFoodItem } from 'src/components/Foods/type.d'

import style from './style.module.scss'

interface IProps {
  item: IFoodItem
  foodModel: any
  register: any
  control: any
  indexFood: number
  removeFoodFromCart: () => void
  handleUpdateItem: () => void
}

export const Item: FC<IProps> = ({
  item,
  indexFood,
  foodModel,
  register,
  removeFoodFromCart,
  handleUpdateItem
}: IProps): JSX.Element => {
  const [amount, setAmount] = useState<number>(foodModel.food.amount)

  const updateFoodItem = (isPlus = false): void => {
    foodModel.food.amount = isPlus
      ? foodModel.food.amount + 1
      : foodModel.food.amount - 1
    setAmount(foodModel.food.amount)
    handleUpdateItem()
  }

  const getToppingName = (id: number): string => {
    const topingItem = item.toping.find((item: IFood) => item.id === id)
    return !!topingItem ? topingItem.name : ''
  }

  const getToppingPrice = (id: number): number => {
    const topingItem = item.toping.find((item: IFood) => item.id === id)
    return !!topingItem ? topingItem.price : 0
  }

  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <img src={item.food.image} alt="logo" />
      </div>

      <div className={style.foodDetail}>
        <div className={style.header}>
          <div className={style.title}>{item.food.name}</div>
          <div className={style.action}>
            <button
              type="button"
              disabled={foodModel?.food.amount < 2}
              onClick={(): void => updateFoodItem()}
            >
              -
            </button>

            <span>
              {amount} @£{item.food.price}
            </span>

            <button type="button" onClick={(): void => updateFoodItem(true)}>
              +
            </button>
          </div>
        </div>

        <div className={style.toping}>
          {foodModel?.toping.map((itemToping: any, index: number) => (
            <div key={index} className={style.topingDetail}>
              <div>{getToppingName(itemToping.id)}:</div>

              <div>
                <input
                  type="number"
                  {...register(`food.${indexFood}.toping.${index}.amount`, { min: 0 })}
                />
                £{getToppingPrice(itemToping.id)}
              </div>
            </div>
          ))}
        </div>

        <div className={style.deleteBtn} onClick={() => removeFoodFromCart()}>
          <img src="/assets/images/trash.png" alt="logo" />
        </div>
      </div>
    </div>
  )
}
