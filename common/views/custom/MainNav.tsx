import { SyntheticEvent } from 'react'
import { useRouter } from 'next/router'

import Logo from '@/assets/images/neue-ui-logo.svg'
import Toolbar from '@/views/ui/Navigation/Toolbar'

export default () => {
  const router = useRouter()

  const urlHandler = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    this.router.push(e.currentTarget.getAttribute('href'))
  }

  return (
    <Toolbar color={{ hue: 'primary', weight: '500' }} constrained={true}>
      {{
        left: {
          component: (
            <Logo className="logo" />
          )
        },
        right: {
          component: (
            <nav>
              <a className={router.pathname === '/styleguide' ? 'active' : ''} href="/styleguide">Styleguide</a>
              <a className={router.pathname === '/styleguide/grid' ? 'active' : ''} href="/styleguide/grid">Grid</a>
              <a className={router.pathname === '/styleguide/headers' ? 'active' : ''} href="/styleguide/headers">Headers</a>
              <a className={router.pathname === '/styleguide/tiles' ? 'active' : ''} href="/styleguide/tiles">Tiles</a>
            </nav>
          )
        }
      }}
    </Toolbar>
  )
}