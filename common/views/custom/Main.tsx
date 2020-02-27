/** @jsx createElement **/
import { createElement, Fragment, ReactNode, Component, SyntheticEvent } from 'react'
import { UI } from 'horseshoes'
import MainNav from './MainNav'

interface Props {
  children?: ReactNode
}

class Main extends Component<Props> {


  render() {
    const { children } = this.props

    return (
      <div id="neue">
        <div className="drawer">

        </div>

        <MainNav />

        <UI.alerts />

        <main>{children}</main>
      </div>
    )
  }
}

export default Main