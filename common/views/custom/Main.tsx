import { ReactNode, Component, Fragment, SyntheticEvent } from 'react'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

import ArrowIcon from '@/assets/images/icons/arrow.svg'
import Logo from '@/assets/images/neue-ui-logo.svg'
import { routes } from '@/config/routes'
import Drawer from '@/views/ui/Navigation/Drawer'
import Content from '../ui/Layout/Content'

interface Props {
  children?: ReactNode
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
                      <li key={routes[tab]['index']['route']} className={router.pathname.match(routes[tab].index.path) ? `active tab` : `tab`}>
                        <button className="link" value={routes[tab].index.path} onClick={this._linkHandler}>
                          {routes[tab].index.icon(null)}
                          <span>{tab}</span>
                        </button>

                        <ul className="pane">
                          {Object.keys(routes[tab]).map(k => k !== 'index' && (
                            <li key={routes[tab][k].path}>
                              <button className={router.pathname === routes[tab][k].path ? 'active link' : 'link'} value={routes[tab][k].path} onClick={this._linkHandler}>
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

          <main className="fixed-height">
            <Content>{children}</Content>
          </main>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)