import { FC } from 'react';
import { IFoodItem } from 'src/components/Foods/type.d';
import style from './style.module.scss';

console.log(style)
interface IProps {
  item: IFoodItem
  addFoodToCart: (item: IFoodItem) => void
}

export const Item: FC<IProps> = ({ item, addFoodToCart }: IProps): JSX.Element => {
  return (
    <div className={style.foodImage}>
      <img src={item?.food?.image} alt="logo" />
      <button className={style.btn} onClick={() => addFoodToCart(item)}>+</button>
    </div>
  )
}
