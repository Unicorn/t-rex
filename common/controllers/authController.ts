import { AUTH, Auth, AuthAction } from '@/models/auth'
import { initialState } from '@/models/app'

export const authReducer = (state: Auth, action: AuthAction): Auth => {
  if (state === undefined) return initialState.auth

  const { payload, type } = action

  if (!payload || !type) return state

  switch (type) {
    case AUTH.LOGIN:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}