export interface IProps {

}

export interface IFood {
  id: number
  name: string
  price: number
  image?: string
}

export interface IFoodItem {
  food: IFood
  toping: IFood[]
}


export interface IFoodForm {
  id: number
  amount: number
  price: number
}

export interface IFoodFormItem {
  food: IFoodForm
  toping: IFoodForm[]
}
