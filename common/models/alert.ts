import { Resource } from "horseshoes";
import { APP_NAME } from "./app";

//
// Types
//
export enum ALERT {
  CREATE = 'neue/alert/create',
  DELETE = 'neue/alert/delete'
}

export enum ALERTS {
  DELETE = 'neue/alerts/DELETE'
}

export interface Alert extends Resource {
  readonly key: string
  readonly status: 'success' | 'warning' | 'error' | 'generic'
  readonly message: string | readonly string[]
  readonly dismissable?: boolean
  readonly dismissAfter?: number
}

export interface AlertAction {
  readonly type: ALERT | ALERTS
  readonly payload?: Alert
}

//
// Data
//
export const defaultAlert: Alert = {
  key: 'alert',
  status: 'generic',
  message: 'No message',
  dismissable: true,
  dismissAfter: 3000
}