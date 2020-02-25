/** @jsx createElement **/
import { createElement, FC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children: ReactNode
}

const Meta: FC<Props> = ({ children }) => (
  <Head>
    {children}
  </Head>
)

export default Meta