import { useRouter } from 'next/router'

import Collection from '@/views/ui/Layout/Collection'
import Tile from '@/views/ui/Layout/Tile'
import Header from '@/views/ui/Typography/Header'
import Button from '@/views/ui/Form/Button'
import { routes } from '@/config/routes'

const p1 = ['Unicorn Agency', 'Foo', 'Bar', 'Baz', 'Clay', 'Courtnie']

const _renderItem = (item: string, index: number) => {
  const router = useRouter()

  return [
    <Tile>
      {{
        head: {
          component: (
            <Header size="100"><strong>{item}</strong> <em>#{index}</em></Header>
          ),
          padding: '500'
        },
        main: {
          component: (
            <img src={`https://picsum.photos/500/300?index=${index}`} alt="photo" width="100%" />
          ),
        }
      }}
    </Tile>,
    <div className="details">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur voluptas quidem quam cumque, sint illo impedit harum excepturi mollitia a voluptatum sapiente animi consequuntur, est perspiciatis? <Button type="link" onClick={() => router.push(routes.examples.post.path)}>Read Post</Button></p>
    </div>
  ]
}

export default () => (
  <section className="examples portfolio">
    <Header size="900" Element="h1">Portfolio Example</Header>
    <Collection items={p1} itemRenderer={_renderItem} details="overlay" type="gallery" />
  </section>
)