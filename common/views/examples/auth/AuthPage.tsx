/** @jsx createElement */
import { createElement, FC, useState, SyntheticEvent, ReactNode, Fragment } from 'react'
import { connect } from 'react-redux'
import { createAlert } from 'horseshoes'
import { v4 } from 'uuid'

import AuthLogin from './AuthLogin'
import AuthRegister from './AuthRegister'
import AuthReset from './AuthReset'
import { AuthSections, AuthForm } from '@/models/auth'
import { validateRegister, validateLogin } from '@/helpers/validationHelper'
import ButtonGroup from '@/views/ui/Form/ButtonGroup'
import Button from '@/views/ui/Form/Button'
import Tile from '@/views/ui/Layout/Tile'
import Header from '@/views/ui/Typography/Header'

interface Actions {
  _createAlert: typeof createAlert
}

const initialUserData: AuthForm = {
  role: 'guest',
  email: '',
  password: '',
  confirm: ''
}

const AuthPage: FC<Actions> = ({ _createAlert }) => {
  const [section, setSection] = useState<AuthSections>('login')
  const [userData, setUserData] = useState<AuthForm>(initialUserData)

  const _inputHandler = (e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const newState = { ...userData }
    newState[e.currentTarget.name] = e.currentTarget.value
    setUserData(newState)
  }

  const _sectionHandler = (e: SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setSection(e.currentTarget.value as AuthSections)
  }

  const _submitHandler = (e: SyntheticEvent<HTMLFormElement | HTMLButtonElement>): void => {
    e.preventDefault()

    let validations: string[] = []

    switch (section) {
      case 'login':
        validations = validateLogin(userData)

        if (validations.length === 0)
          _createAlert({
            key: v4(),
            status: 'success',
            message: "You have logged in"
          })
        break

      case 'register':
        validations = validateRegister(userData)

        if (validations.length === 0)
          _createAlert({
            key: v4(),
            status: 'error',
            message: "You can't actualy register for anything on this demo!"
          })
        break
    }

    if (validations.length > 0)
      _createAlert({
        key: v4(),
        status: 'error',
        message: validations,
        dismissAfter: 5000
      })
  }

  const _renderSection = (section: AuthSections): ReactNode => {
    switch (section) {
      case 'login':
        return <AuthLogin data={userData} inputHandler={_inputHandler} />
      case 'register':
        return <AuthRegister data={userData} inputHandler={_inputHandler} />
      case 'reset':
        return <AuthReset data={userData} inputHandler={_inputHandler} />
      default:
        return null
    }
  }

  const _renderAction = (section: AuthSections): ReactNode => {
    if (section === 'login')
      return (
        <ButtonGroup>
          <Button onClick={_submitHandler}>{section}</Button>
          <Button type="link" value="reset" onClick={_sectionHandler}>Forgot Password?</Button>
        </ButtonGroup>
      )

    return <Button onClick={_submitHandler}>{section}</Button>
  }

  const _renderFooter = (section: AuthSections): ReactNode => {
    if (section === 'login')
      return (
        <Fragment>
          Need an account?{' '}
          <Button type="link" value="register" onClick={_sectionHandler}>Sign Up</Button>
        </Fragment>
      )
    else if (section === 'register')
      return (
        <Fragment>
          Already have an account?{' '}
          <Button type="link" value="login" onClick={_sectionHandler}>Sign In</Button>
        </Fragment>
      )

    return (
      <Fragment>
        <Button type="link" value="register" onClick={_sectionHandler}>Sign Up</Button>
        {' '}or{' '}
        <Button type="link" value="login" onClick={_sectionHandler}>Sign In</Button>
      </Fragment>
    )
  }

  return (
    <Tile radius="900" shadow="900">
      {{
        head: {
          component: (
            <Header>{section}</Header>
          ),
          padding: '700'
        },
        main: {
          component: (
            <form onSubmit={_submitHandler} autoComplete="off">
              {_renderSection(section)}
              {_renderAction(section)}
            </form>
          ),
          padding: '700'
        },
        foot: {
          component: _renderFooter(section),
          padding: '700'
        }
      }}
    </Tile>
  )
}

const mapDispatch: Actions = {
  _createAlert: createAlert,
}

export default connect(
  null,
  mapDispatch
)(AuthPage)
