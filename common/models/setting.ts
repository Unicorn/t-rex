
export enum SETTING {
  DRAWER_TOGGLE = 'neue/settings/DRAWER_TOGGLE'
}

export interface Drawer {
  [key: string]: {
    collapse: boolean
  }
}

interface Drawers {
  drawers?: Drawer
}

export type Setting = Drawer

export interface Settings extends Drawers { }

export interface SettingsAction {
  type: SETTING
  payload?: Setting
}