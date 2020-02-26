import { Fragment } from 'react'

import Tile from '@/views/ui/Box/Tile'
import Toolbar from '@/views/ui/Navigation/Toolbar'
import Header from '@/views/ui/Typography/Header'

export default () => (
  <Fragment>
    <Toolbar color={{ hue: 'primary', weight: '500' }} />

    <main className="headers elements">
      <Header size="900" Element="h1">Headers</Header>

      <Tile padding="800" radius="100" shadow="100">Shadow 100</Tile>
      <Tile padding="800" radius="100" shadow="200">Shadow 200</Tile>
      <Tile padding="800" radius="100" shadow="300">Shadow 300</Tile>
      <Tile padding="800" radius="100" shadow="400">Shadow 400</Tile>
      <Tile padding="800" radius="100" shadow="500">Shadow 500</Tile>
      <Tile padding="800" radius="100" shadow="600">Shadow 600</Tile>
      <Tile padding="800" radius="100" shadow="700">Shadow 700</Tile>
      <Tile padding="800" radius="100" shadow="800">Shadow 800</Tile>
      <Tile padding="800" radius="100" shadow="900">Shadow 900</Tile>
    </main>
  </Fragment>
)