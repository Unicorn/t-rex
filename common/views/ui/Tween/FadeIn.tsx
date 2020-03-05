import { FC, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
}

const FadeIn: FC<Props> = ({ children, delay }) => {
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => setAppear(true), delay)
  })

  return <div className={appear ? 'animate fade-in appear' : 'animate fade-in'}>{children}</div>
}

FadeIn.defaultProps = {
  delay: 100
}

export default FadeIn
