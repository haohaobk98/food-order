import { FC, useRef, useState } from 'react';
import { IFoodItem } from '../../type';
import { FoodChosen } from '../FoodChosen';
import { FoodList } from '../FoodList';


import style from './style.module.scss';

interface IProps {

}

export const FoodCart: FC<IProps> = (): JSX.Element => {
  const [foodChosen, setFoodChosen] = useState<IFoodItem[]>([]);
  const foodRef: any = useRef(null)


  const addFoodToCart = (item: IFoodItem): void => {
    const newFoodChosen = [...foodChosen]
    newFoodChosen.push(item)
    foodRef.current.appendFood(item)
    setFoodChosen(newFoodChosen)
  }

  // const removeFoodFromCart = (id: number): void => {
  //   let newFoodChosen = [...foodChosen]
  //   const indexRemove = newFoodChosen.findIndex((item: IFoodItem) => item.food.id === id)

  //   if (indexRemove > -1) {
  //     newFoodChosen = newFoodChosen.splice(indexRemove, 1)
  //   }
  //   console.log("---", newFoodChosen)

  //   // setFoodChosen(newFoodChosen)
  // }


  return (
    <div className={style.food}>
      <div className={style.foodList}>
        <FoodList addFoodToCart={addFoodToCart} />
      </div>

      <div className={style.foodCart}>
        <FoodChosen foodChosen={foodChosen} ref={foodRef} />
      </div>
    </div>
  )
}
