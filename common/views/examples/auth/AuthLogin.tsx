import { FC } from 'react'

import { validateEmail, validatePassword } from '@/helpers/validationHelper'
import { AuthForm } from '@/models/auth'
import Form from '@/views/ui/Form'
import FadeIn from '@/views/ui/Tween/FadeIn'

interface Props {
  data: AuthForm
  inputHandler: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const AuthLogin: FC<Props> = ({ data, inputHandler }) => {
  return (
    <FadeIn>
      <Form.TextField
        label="Email"
        type="email"
        name="email"
        value={data.email}
        validate={validateEmail}
        onChange={inputHandler}
        required
      />

      <Form.TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        validate={validatePassword}
        onChange={inputHandler}
        required
      />
    </FadeIn>
  )
}

export default AuthLogin
