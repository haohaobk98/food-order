import { FC, useEffect, useMemo, useRef } from 'react'

import style from './style.module.scss'

interface IProps {
  children: JSX.Element[]
}

console.log('--style:', style)

const getSlot: any = (children: JSX.Element[], name: string): any => {
  return children.find((item: JSX.Element): boolean => item.props.slot === name)
}

export const ComponentWithSlots: FC<IProps> = ({
  children
}: IProps): JSX.Element => {
  const ref: any = useRef()
  console.log(children, Array.isArray(children))

  const slots: any = useMemo((): any => {
    const header: JSX.Element | undefined = getSlot(children, 'header')
    const body: JSX.Element | undefined = getSlot(children, 'body')
    const footer: JSX.Element | undefined = getSlot(children, 'footer')

    return {
      header,
      body,
      footer
    }
  }, [children])

  console.log(slots)

  useEffect((): void => {
    // const doc: any = document.getElementById('root')
    // console.log('---ref:', doc._reactRootContainer._internalRoot)

    // console.log('--body:', slots.body)

    console.log('---lan dau tien component render')
  }, [])

  return (
    <div ref={ref}>
      <div className={style.slots}>
        <div className={style.header}>{slots.header}</div>
        <div className={style.body}>{slots.body}</div>
        <div className={style.footer}>{slots.footer}</div>
      </div>
    </div>
  )
}
