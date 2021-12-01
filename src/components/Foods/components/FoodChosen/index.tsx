import { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react'
import { IFood, IFoodForm, IFoodFormItem, IFoodItem } from '../../type'
import { Item } from './Item'

import { useForm, useFieldArray } from 'react-hook-form'

import style from './style.module.scss'

interface IProps {
  foodChosen: IFoodItem[]
}

let FoodChosen: any = ({ foodChosen }: IProps, ref: any) => {
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const { register, control, handleSubmit, watch, getValues, setValue } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'food'
  })

  useEffect(() => {
    const subscription = watch((value) => calculatePrice(value));
    return () => subscription.unsubscribe();
  }, [watch]);

  useImperativeHandle(ref, (): any => {
    return {
      appendFood: (item: any): void => {
        const newFood: IFoodFormItem = {
          food: {
            id: item.food.id,
            amount: 1,
            price: item.food.price
          },
          toping: item.toping.map((itemToping: IFood): IFoodForm => {
            return {
              id: itemToping.id,
              amount: 0,
              price: itemToping.price
            }
          })
        }

        append(newFood)

        const values = getValues()
        calculatePrice(values)
      }
    }
  })

  const calculatePrice = useCallback((data: any): void => {
    let totalPrice = 0
    data.food.forEach((item: IFoodFormItem, indexFood: number) => {
      totalPrice += Number(item.food.amount) * Number(item.food.price)

      item.toping.forEach((itemToping: IFoodForm, index: number) => {
        if (Number(itemToping.amount) < 0) {
          setValue(`food.${indexFood}.toping.${index}.amount`, 0)
        } else {
          totalPrice += Number(itemToping.amount) * Number(itemToping.price)
        }
      })
    })

    totalPrice = totalPrice - (totalPrice * data.coupon) / 100
    setTotalPrice(totalPrice)
  }, [])

  const handleSubmitData = (data: any) => {
    calculatePrice(data)
  }

  const handleRemove = (index: number): void => {
    remove(index)
    const values = getValues()
    calculatePrice(values)
  }


  return (
    <div className={style.wrapper}>
      <div className={style.title}>YOUR CART</div>

      <div className={style.choosen}>
        {fields.length > 0 && (
          <form onSubmit={handleSubmit(data => handleSubmitData(data))}>
            {fields?.map((item: any, index: number) => (
              <Item
                key={index}
                indexFood={index}
                item={foodChosen[index]}
                register={register}
                control={control}
                foodModel={item}
                removeFoodFromCart={() => handleRemove(index)}
                handleUpdateItem={() => { calculatePrice(getValues()) }}
              />
            ))}

            <div className={style.payment}>
              <div className={style.address}>
                <div>Delivery Address</div>
                <div>46 Vale Road Ramsgate</div>
              </div>
              <div className={style.card}>
                <div>Payment Card</div>
                <div>**** **** **** 8678</div>
              </div>
            </div>

            <div className={style.coupon}>
              <div>Apply coupon</div>
              <select {...register('coupon')}>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
              </select>
            </div>

            <div className={style.totalPrice}>
              <button>Check out</button>

              <div>{totalPrice} £</div>
            </div>
          </form>
        )}

        {!fields.length && (
          <div className={style.emptyCart}>
            Your cart is empty!
          </div>
        )}
      </div>
    </div>
  )
}

FoodChosen = forwardRef(FoodChosen)

export { FoodChosen }
