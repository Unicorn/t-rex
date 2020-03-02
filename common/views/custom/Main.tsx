/** @jsx createElement **/
import { createElement, ReactNode, Component, Fragment, SyntheticEvent } from 'react'
import { UI } from 'horseshoes'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

import ArrowIcon from '@/assets/images/icons/arrow.svg'
import DesignIcon from '@/assets/images/icons/design.svg'
import LayoutIcon from '@/assets/images/icons/layout.svg'
import Logo from '@/assets/images/neue-ui-logo.svg'
import { routes } from '@/config/routes'
import Drawer from '@/views/ui/Navigation/Drawer'

interface Props {
  children?: ReactNode
}

const RouteIcons = {
  styleguide: DesignIcon,
  layout: LayoutIcon
}

class Main extends Component<Props & WithRouterProps> {
  _linkHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("clicky", e.currentTarget.value)
    this.props.router.push(e.currentTarget.value)
  }

  render() {
    const { children, router } = this.props

    return (
      <div id="neue">
        <div className="layout">
          <Drawer identifier="main" color={{ hue: 'primary', weight: '600' }}>
            {{
              head: {
                component: (
                  <Fragment>
                    <Logo className="logo" />,
                    <div className="brand">
                      <strong>Neue UI</strong>
                      <em>Next generation design</em>
                    </div>
                  </Fragment>
                )
              },
              toggle: {
                component: (
                  <ArrowIcon />
                )
              },
              main: {
                component: (
                  <ul className="menu">
                    {Object.keys(routes).map((tab: string) => (
                      <li key={routes[tab]['index']} className={router.pathname.match(routes[tab]['index']) ? `active tab` : `tab`}>
                        <button className="link" value={routes[tab]['index']} onClick={this._linkHandler}>
                          {tab === 'layout' ? <LayoutIcon className="icon" /> : <DesignIcon className="icon" />}
                          <span>{tab}</span>
                        </button>

                        <ul className="pane">
                          {Object.keys(routes[tab]).map(k => k !== 'index' && (
                            <li key={routes[tab][k]}>
                              <button className={router.pathname === routes[tab][k] ? 'active link' : 'link'} value={routes[tab][k]} onClick={this._linkHandler}>
                                <span>{k}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )
              }
            }}
          </Drawer>

          <div className="content">
            <UI.alerts />
            <main className="fixed-height">{children}</main>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)