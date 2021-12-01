import { FC, useRef, useEffect, useState } from 'react'
import { Child } from './components/Child'
import { MyForm } from './components/MyForm'
import { Modal, Button, Select } from 'antd'

import { RenderToCustomNode } from './components/RenderToCustomNode'

import { RankEnum, IExamScore } from './components/Child/type'
import { ComponentWithSlots } from './components/ComponentWithSlots'

import { Foods } from './components/Foods'

import './App.scss'

const { Option } = Select

const examScore: IExamScore[] = [
  { id: 2, score: 9.2, name: 'literature', rank: RankEnum.R2 },
  { id: 1, score: 1.8, name: 'art', rank: RankEnum.R3 },
  { id: 3, score: 3.2, name: 'history' },
  { id: 4, name: 'english' }
]

const App: FC = (): JSX.Element => {
  const childRef: any = useRef(null)
  const [key, setKey] = useState('abc')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const userNameRef: any = useState(null)
  const passwordRef: any = useState(null)

  const submit: any = (): void => {
    console.log({
      userName: userNameRef.current.value,
      password: passwordRef.current.value
    })
  }

  useEffect((): void => {
    console.log('--childRef:', childRef)

    // childRef.current.line2Ref.current.setAttribute('style', 'color: red')
    // childRef.current.setName()

    setTimeout((): void => {
      // setKey('bcdef')
    }, 10000)
  }, [])

  return (
    <div>
      {/* <div id="test-1">
        <RenderToCustomNode>
          <Child
            ref={childRef}
            name="Nguyen Van A"
            age={16}
            examScore={examScore}
          />
        </RenderToCustomNode>
      </div> */}

      {/* <ComponentWithSlots key={key}>
        <p>Nothing</p>

        <Child
          slot="body"
          ref={childRef}
          name="Nguyen Van A"
          age={16}
          examScore={examScore}
        />

        <p slot="footer">Footer</p>
        <p slot="header">Header</p>
      </ComponentWithSlots> */}

      {/* <p>User name:</p>
      <input
        ref={userNameRef}
        type="text"
        value={userName}
        onChange={(event: any): void => {
          setUserName(event?.target.value)
        }}
      />

      <p>Password:</p>
      <input
        ref={passwordRef}
        type="text"
        value={password}
        onChange={(event: any): void => {
          setPassword(event?.target.value)
        }}
      />

      <button onClick={submit}>Submit</button> */}

      {/* <MyForm /> */}
      <Foods />
    </div>
  )
}

export default App
