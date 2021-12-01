import { FC, useMemo } from 'react'
import ReactDOM from 'react-dom'

interface IProps {
  children: JSX.Element
}

export const RenderToCustomNode: FC<IProps> = ({
  children
}: IProps): JSX.Element => {
  const content: any = useMemo((): any => {
    const node: HTMLElement | null = document.getElementById('my-node')

    console.log('--node:', node)

    if (node) {
      return ReactDOM.createPortal(children, node)
    }

    return null
  }, [children])

  return content
}
