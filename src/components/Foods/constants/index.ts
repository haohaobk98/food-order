import { IFoodItem } from '../type'

export const foodDb: IFoodItem[] = [
  {
    food: {
      id: 1,
      name: 'Lasagne Al Forno',
      price: 15.5,
      image: '/assets/images/food1.jpg'
    },
    toping: [
      {
        id: 2,
        name: 'salad',
        price: 5
      },
      {
        id: 3,
        name: 'tea',
        price: 5
      }
    ]
  },
  {
    food: {
      id: 4,
      name: 'Garlic Ciabatta',
      price: 2.49,
      image: '/assets/images/food2.jpg'
    },
    toping: [
      {
        id: 5,
        name: 'coke',
        price: 3
      },
      {
        id: 6,
        name: 'orange',
        price: 2
      }
    ]
  },
  {
    food: {
      id: 8,
      name: 'White Chocolate & Raspberry Cheesecake',
      price: 8.5,
      image: '/assets/images/food3.jpg'
    },
    toping: [
      {
        id: 9,
        name: 'milk',
        price: 3
      },
      {
        id: 10,
        name: 'corn',
        price: 2
      }
    ]
  }
]


const formModel = [
  {
    food: {
      id: 1,
      amount: 2,
    },
    toping: [
      {
        id: 11,
        amount: 2
      }
    ]
  }
]
