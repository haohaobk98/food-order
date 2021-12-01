import { FC } from 'react';

import style from './style.module.scss'

interface IProps {

}

export const Header: FC<IProps> = (): JSX.Element => {
  return (
    <div className={style.header}>
      <div className={style.login}>
        Login
      </div>

      <div className={style.logo}>
        <img src="/assets/images/Logo-full-black.png" alt="logo" />
      </div>

      <div className={style.basket}>
        <img src="/assets/images/basket2.png" alt="logo" />
      </div>
    </div>
  )
}
