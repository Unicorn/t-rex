import { FC } from 'react'
import { useAuth0 } from '@/containers/Auth0'

const LoginPage: FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  )
}

export default LoginPage