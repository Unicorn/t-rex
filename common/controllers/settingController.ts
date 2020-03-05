import { SETTING, Settings, SettingsAction } from '@/models/setting'
import { initialState } from '@/models/app'

export const drawerToggle = (identifier: string, collapse: boolean): SettingsAction => ({
  type: SETTING.DRAWER_TOGGLE,
  payload: {
    [identifier]: { collapse }
  }
})

export const settingReducer = (state: Settings, action: SettingsAction): Settings => {
  if (state === undefined) return initialState.settings

  const { payload, type } = action

  if (!payload || !type) return state

  switch (type) {
    case SETTING.DRAWER_TOGGLE:
      return {
        ...state,
        drawers: {
          ...state.drawers,
          ...payload
        }
      }

    default:
      return state
  }
}