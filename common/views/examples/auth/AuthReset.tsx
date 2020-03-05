import { FC } from 'react'

import { validateEmail } from '@/helpers/validationHelper'
import { AuthForm } from '@/models/auth'
import Form from '@/views/ui/Form'
import FadeIn from '@/views/ui/Tween/FadeIn'

interface Props {
  data: AuthForm
  inputHandler: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const AuthReset: FC<Props> = ({ data, inputHandler }) => {
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
    </FadeIn>
  )
}

export default AuthReset
