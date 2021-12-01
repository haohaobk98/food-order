import { useRef, useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import { IProps } from './type'
import style from './style.module.scss'

// console.log('--style:', style)

interface IFowardRefData {
  myName: string
  line2Ref: any
  setName: () => void
}

interface IFowardRef {
  current: null | IFowardRefData
}

const ChildComponent: any = (
  { name = 'ahihi' }: IProps,
  ref: IFowardRef
): JSX.Element => {
  const [myName, setMyName] = useState<string>('Nguyen Van Nam')
  const line2Ref: null | {
    current: any
  } = useRef(null)

  useImperativeHandle(ref, (): any => ({
    myName,
    line2Ref,
    setName: (): void => {
      setMyName('Nguyen Thi B')
    }
  }))

  return (
    <div className={style.child}>
      <h1 className="child__name">My child: {name}</h1>

      <h1 ref={line2Ref}>Line 2</h1>

      <p>{myName}</p>
    </div>
  )
}

const Child: any = forwardRef(ChildComponent)
Child.propTypes = {
  age: PropTypes.number.isRequired,
  name: function (props: IProps, propName: string): any {
    if (typeof props.name === 'undefined') {
      return new Error('Name is required for Child')
    }

    if (typeof props.name !== 'string') {
      return new Error('Name should be a string instead of number because ...')
    }
  },
  examScore: function (props: IProps, propName: string): any {
    console.log({
      props,
      propName
    })

    for (const exam of props.examScore) {
      if (exam.hasOwnProperty('score') && !exam.hasOwnProperty('rank')) {
        return new Error(
          `If score was provided, rank must be provided as well: ${JSON.stringify(
            exam
          )}`
        )
      }
    }
  }
}

Child.defaultProps = {
  name: 'Nguyen Thi Teo'
}
export { Child }
