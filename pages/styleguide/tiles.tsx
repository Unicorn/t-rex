import Header from '@/views/ui/Typography/Header'
import Tile from '@/views/ui/Box/Tile'

export default () => (
  <main className="styleguide tiles">
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

    <Header size="900" Element="h2">Radius</Header>

    <Tile padding="800" radius="100" shadow="900">Radius 100</Tile>
    <Tile padding="800" radius="200" shadow="900">Radius 200</Tile>
    <Tile padding="800" radius="300" shadow="900">Radius 300</Tile>
    <Tile padding="800" radius="400" shadow="900">Radius 400</Tile>
    <Tile padding="800" radius="500" shadow="900">Radius 500</Tile>
    <Tile padding="800" radius="600" shadow="900">Radius 600</Tile>
    <Tile padding="800" radius="700" shadow="900">Radius 700</Tile>
    <Tile padding="800" radius="800" shadow="900">Radius 800</Tile>
    <Tile padding="800" radius="900" shadow="900">Radius 900</Tile>
  </main>
)
