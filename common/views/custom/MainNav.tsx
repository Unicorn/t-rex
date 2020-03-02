import { useRouter } from 'next/router'

import Logo from '@/assets/images/neue-ui-logo.svg'
import Toolbar from '@/views/ui/Navigation/Toolbar'
import { routes } from '@/config/routes'

export default () => {
  const router = useRouter()

  return (
    <Toolbar color={{ hue: 'primary', weight: '500' }} constrained={false}>
      {{
        left: {
          component: (
            <Logo className="logo" />
          )
        },
        right: {
          component: (
            <nav>
              {Object.keys(routes.styleguide).map(key => (
                <a className={router.pathname === routes.styleguide[key] ? 'active' : ''} href={routes.styleguide[key]}>
                  {key}
                </a>
              ))}
            </nav>
          )
        }
      }}
    </Toolbar>
  )
}