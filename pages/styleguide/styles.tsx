import Header from '@/views/ui/Typography/Header'
import Tile from '@/views/ui/Layout/Tile'

export default () => (
  <section className="styleguide tiles">
    <Header size="900" Element="h1">Headers</Header>

    <div className="row between-xs">
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="100">Shadow 100</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="200">Shadow 200</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="300">Shadow 300</Tile>
    </div>

    <div className="row between-xs">
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="400">Shadow 400</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="500">Shadow 500</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="600">Shadow 600</Tile>
    </div>

    <div className="row between-xs">
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="700">Shadow 700</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="800">Shadow 800</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="900">Shadow 900</Tile>
    </div>

    <Header size="900" Element="h2">Radius</Header>

    <div className="row between-xs">
      <Tile className="col-xs-21 col-md-6" padding="700" radius="100" shadow="900">Radius 100</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="200" shadow="900">Radius 200</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="300" shadow="900">Radius 300</Tile>
    </div>

    <div className="row between-xs">
      <Tile className="col-xs-21 col-md-6" padding="700" radius="400" shadow="900">Radius 400</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="500" shadow="900">Radius 500</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="600" shadow="900">Radius 600</Tile>
    </div>

    <div className="row between-xs">
      <Tile className="col-xs-21 col-md-6" padding="700" radius="700" shadow="900">Radius 700</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="800" shadow="900">Radius 800</Tile>
      <Tile className="col-xs-21 col-md-6" padding="700" radius="900" shadow="900">Radius 900</Tile>
    </div>
  </section>
)
