import { useState, SyntheticEvent } from 'react'

import Header from '@/views/ui/Typography/Header'
import Collection from '@/views/ui/Layout/Collection'
import Tile from '@/views/ui/Layout/Tile'
import { UIColor, UISizeOptions } from '@/views/ui/UI'
import Form from '@/views/ui/Form'

interface ItemProps {
  color: UIColor
  padding: UISizeOptions
}

const _renderItem = (item: ItemProps, index: number) => (
  <Tile radius="500" shadow="500">
    {{
      head: {
        component: (
          <Header size="100">Head: {item.color.hue} #{item.color.weight}</Header>
        ),
        color: item.color,
        padding: item.padding
      },
      main: {
        component: (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur voluptas quidem quam.</p>
        ),
        padding: item.padding
      },
      foot: {
        component: (
          <span>Padded: 500</span>
        ),
        padding: item.padding
      }
    }}
  </Tile>
)

const _renderTile = (item: ItemProps, index: number) => (
  <Tile color={item.color} radius="500" shadow="500" padding="700">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur voluptas quidem quam.</p>
  </Tile>
)



export default () => {
  const [_state, _setState] = useState({ hue: 'neutral', padding: '500' })

  const _settingHandler = (e: SyntheticEvent<HTMLSelectElement>) => {
    let newState = { ..._state }
    newState[e.currentTarget.name] = e.currentTarget.value
    _setState(newState)
  }

  const items = [
    { color: { hue: _state.hue, weight: '100' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '200' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '300' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '400' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '500' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '600' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '700' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '800' }, padding: _state.padding },
    { color: { hue: _state.hue, weight: '900' }, padding: _state.padding },
  ]

  return (
    <section className="styleguide elements">
      <Header size="900" Element="h1">Tiles</Header>
      <p>You can adjust the hues below and see how defined colors, padding, and radius values effect the overall aesthetic of the Tile Component.</p>

      <div className="row xs-between">
        <div className="col-xs">
          <Form.SelectField
            name="hue"
            type="select"
            value={_state.hue}
            label="Hue"
            options={{
              neutral: { label: 'Neutral' },
              primary: { label: 'Primary' },
              secondary: { label: 'Secondary' }
            }}
            onChange={_settingHandler}
          />
        </div>

        <div className="col-xs">
          <Form.SelectField
            name="padding"
            type="select"
            value={_state.padding}
            label="Padding"
            options={{
              100: { label: '100' },
              200: { label: '200' },
              300: { label: '300' },
              400: { label: '400' },
              500: { label: '500' },
              600: { label: '600' },
              700: { label: '700' },
              800: { label: '800' },
              900: { label: '900' },
            }}
            onChange={_settingHandler}
          />
        </div>
      </div>

      <Header size="700" Element="h2">Head Color: {_state.hue}, Tile Padding: {_state.padding}</Header>
      <Collection items={items} itemRenderer={_renderItem} />

      <Header size="700" Element="h2">Tile Color: {_state.hue}</Header>
      <Collection items={items} itemRenderer={_renderTile} />
    </section>
  )
}