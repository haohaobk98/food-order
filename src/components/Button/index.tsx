import { Component } from 'react'

import { IState, IProps } from './type'

export class Button extends Component<IProps, IState> {
  state: IState = {
    count: 0
  }

  student = {
    name: 'Hoa',
    age: 9
  }

  increment = (): void => {
    this.setState({
      count: this.state.count + this.props.step
    })
  }

  decrement = (): void => {
    this.setState({
      count: this.state.count - this.props.step
    })
  }

  componentDidMount() {
    this.props.setStep(10)
  }

  render() {
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <p>Count: {this.state.count}</p>
      </>
    )
  }
}
