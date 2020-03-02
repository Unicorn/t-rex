import { FC, ReactNode, SyntheticEvent } from "react"
import { get } from 'lodash'
import { connect } from 'react-redux'

import { UIColorOptions, UIWeightOptions } from "../UI"
import { drawerToggle } from "@/controllers/settingController"
import { RootState } from '@/models/app'

export interface Props {
  identifier: string
  children?: {
    head?: {
      component: ReactNode
    }
    toggle?: {
      component: ReactNode
      handler?: (e: SyntheticEvent<HTMLButtonElement>) => void
    }
    main?: {
      component: ReactNode
    }
  }
  color?: {
    hue?: UIColorOptions
    weight?: UIWeightOptions
  }
}

export interface Connected {
  collapse: boolean
}

export interface Actions {
  _drawerToggle: typeof drawerToggle
}

const Drawer: FC<Props & Connected & Actions> = ({ identifier, children, color, collapse, _drawerToggle }) => {
  let classes = ['drawer', 'navigation']
  classes.push(`bg ${get(color, 'hue', 'neutral')} c${get(color, 'weight', '500')}`)
  classes.push(collapse ? 'collapse' : '')

  const __drawerToggle = (e: SyntheticEvent<HTMLButtonElement>) => {
    _drawerToggle(identifier, !collapse)
  }

  const _renderToggle = () => {
    if (!children || !children.toggle) return null

    return (
      <button className="toggle" onClick={__drawerToggle}>
        {children && children.toggle && children.toggle.component}
      </button>
    )
  }

  return (
    <div className={classes.join(' ')}>
      <header className="head">
        {children && children.head && children.head.component}
      </header>

      {_renderToggle()}

      <div className="main">
        {children && children.main && children.main.component}
      </div>
    </div>
  )
}

const mapState = ({ settings }: RootState, { identifier }: Props) => ({
  collapse: get(settings, ['drawers', identifier, 'collapse'], false)
})

const mapDispatch: Actions = {
  _drawerToggle: drawerToggle
}

export default connect(mapState, mapDispatch)(Drawer)