import { FC } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import { toArray, deleteAlert } from 'horseshoes'

import { Alert as TAlert } from '@/models/alert'
import Alert from './Alert'

export interface Connected {
  readonly alerts: readonly TAlert[]
}

export interface Actions {
  readonly _deleteAlert: typeof deleteAlert
}

const Alerts: FC<Connected & Actions> = ({ alerts, _deleteAlert }) => {
  if (!alerts || alerts.length < 1) { return null }

  alerts.forEach(alert => alert.dismissAfter && setTimeout(() => {
    _deleteAlert(alert)
  }, alert.dismissAfter))

  return (
    <div className="alerts">
      {alerts.map((alert: TAlert) => (
        <Alert alert={alert} dismissHandler={_deleteAlert} key={v4()} />
      ))}
    </div>
  )
}

const mapState = (state: any): Connected => ({
  alerts: toArray(state.alerts) as readonly TAlert[]
})

const mapDispatch: Actions = {
  _deleteAlert: deleteAlert
}

export default connect(
  mapState,
  mapDispatch
)(Alerts)
