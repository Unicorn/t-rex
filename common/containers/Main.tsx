/** @jsx createElement **/
import { createElement, Fragment, ReactNode, Component } from 'react'
import { connect } from 'react-redux'
import { UI } from 'horseshoes'

interface Props {
  children?: ReactNode
}

class Main extends Component<Props> {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <UI.alerts />
        {children}
      </Fragment>
    )
  }
}

export default Main