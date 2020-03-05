import { FC, SyntheticEvent } from 'react'

import { validateEmail, validatePassword } from '@/helpers/validationHelper'
import { AuthForm } from '@/models/auth'
import Form from '@/views/ui/Form'
import FadeIn from '@/views/ui/Tween/FadeIn'

interface Props {
  data: AuthForm
  inputHandler: (e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const AuthRegister: FC<Props> = ({ data, inputHandler }) => {
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

      <Form.TextField
        label="Confirm Password"
        type="password"
        name="confirm"
        value={data.confirm}
        validate={validatePassword}
        onChange={inputHandler}
        required
      />
    </FadeIn>
  )
}

export default AuthRegister
