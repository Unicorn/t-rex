import Header from '@/views/ui/Typography/Header'
import Drawer from '@/views/ui/Navigation/Drawer'
import Toolbar from '@/views/ui/Navigation/Toolbar'
import Code from '@/views/ui/Layout/Code'
import Content from '@/views/ui/Layout/Content'
import Tile from '@/views/ui/Layout/Tile'

export default () => (
  <section className="styleguide elements">
    <Header size="900" Element="h1">Layout</Header>

    <Tile className="layout example">
      <Drawer identifier="layoutExample" />
      <Content>
        <Toolbar constrained={true} />
        <div className="example">
          <Code>
            {`
              <div className="layout example">
                <Drawer color={{ weight: '100' }} />
                <Content padding="700" />
              </div>
            `}
          </Code>
        </div>
      </Content>
    </Tile>

  </section>
)