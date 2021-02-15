import { HydrateAction, initialState, RootState } from '@/models/app'

export const hydrateReducer = (state: RootState, action: HydrateAction): RootState => {
  const { payload, type } = action

  return {
    ...initialState,
    ...state,
    ...payload
  }
}