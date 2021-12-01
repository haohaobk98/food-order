import { FC } from 'react';

import { IProps } from './type.d';

import { Header } from './components/Header';
import { FoodCart } from './components/FoodCart';


import './scss/index.scss';
import style from './style.module.scss';

export const Foods: FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Header />
      <FoodCart />
    </>
  )
}
