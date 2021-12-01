import { FC } from 'react'


import style from './style.module.scss';

import { foodDb } from './../../constants/index'
import { IFoodItem } from '../../type';
import { Item } from './Item';
interface IProps {
  addFoodToCart: (item: IFoodItem) => void
}

export const FoodList: FC<IProps> = ({ addFoodToCart }: IProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Food List
      </div>

      <div className={style.list}>
        {foodDb.map((item: IFoodItem, index: number): JSX.Element => {
          return <Item key={index} item={item} addFoodToCart={addFoodToCart} />
        })}
      </div>
    </div>
  )
}
