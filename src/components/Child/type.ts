export enum RankEnum {
  R1 = 'R1',
  R2 = 'R2',
  R3 = 'R3'
}

export interface IExamScore {
  id: number
  name: string
  score?: number
  rank?: RankEnum
}

export interface IProps {
  name?: string | number
  age: number
  examScore: IExamScore[]
}
