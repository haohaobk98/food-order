export interface IState {
  count: number
}

export const defaultProps = {
  step: 1
}

export interface IProps {
  slot?: string
  step: number
  student: any
  setStep: (step: number) => void
}

// & typeof defaultProps
