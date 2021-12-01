import { FC, Children, useMemo, useEffect } from 'react'

interface IProps {
  children?: JSX.Element | JSX.Element[]
}
export const TmpWrapper: FC<IProps> = ({ children }: IProps): JSX.Element => {
  useEffect((): any => {
    console.log('---useEffect')

    return (): void => {
      console.log('un mount')
    }
  }, [children])

  const slot: any = useMemo((): any => {
    console.log('---useMemo')

    const nodes: any = Children.toArray(children)

    const top: JSX.Element | null = nodes.find(
      (component: JSX.Element): boolean => component.props.slot === 'top'
    )

    const bottom: JSX.Element | null = nodes.find(
      (component: JSX.Element): boolean => component.props.slot === 'bottom'
    )

    return {
      top,
      bottom
    }
  }, [children])

  console.log(children)

  return (
    <div className="wrapper">
      <div className="top">{slot.top}</div>
      <div className="bottom">{slot.bottom}</div>
    </div>
  )
}
