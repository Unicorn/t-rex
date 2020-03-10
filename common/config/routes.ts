import { FC } from 'react'

import StyleguideIcon from '@/assets/images/icons/design.svg'
import ExamplesIcon from '@/assets/images/icons/examples.svg'
import LayoutIcon from '@/assets/images/icons/layout.svg'

interface Routes {
  [key: string]: {
    [key: string]: {
      path: string
      icon?: FC
    }
  }
}

export const routes: Routes = {
  layout: {
    index: {
      path: '/layout',
      icon: LayoutIcon
    },
    grid: {
      path: '/layout/grid',
    },
    tiles: {
      path: '/layout/tiles',
    }
  },
  styleguide: {
    index: {
      path: '/styleguide',
      icon: StyleguideIcon
    },
    headers: {
      path: '/styleguide/headers',
    },
    styles: {
      path: '/styleguide/styles',
    }
  },
  examples: {
    index: {
      path: '/examples',
      icon: ExamplesIcon
    },
    authentication: {
      path: '/examples/authentication',
    },
    portfolio: {
      path: '/examples/portfolio',
    },
    post: {
      path: '/examples/post'
    }
  }
}