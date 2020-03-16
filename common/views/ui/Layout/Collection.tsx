import { FC, ReactNode, useEffect, useState } from 'react'
// @TODO SizeMe adds a hidden component. Need to remove that.
import { withSize, SizeMeProps } from 'react-sizeme'
import { v4 } from 'uuid'

export interface CollectionProps {
  items: any[]
  itemRenderer: (item: any, index: number) => ReactNode
  display?: 'grid'
  type?: 'gallery'
  details?: 'overlay'
  grid?: {
    columns: number
    gutter: string
  },
}

const Collection: FC<CollectionProps> = ({ items, itemRenderer, display, grid, type, details }) => {
  const baseClass = `collection ${display} ${type || ''} ${details || ''}`
  const [rowGap, columnGap] = grid.gutter.split(' ')

  let columnCount = grid.columns
  let columnWidth = 100 / grid.columns

  // @TODO SizeMe adds a hidden component. Need to remove that.
  // if (size.width < 768) {
  //   columnCount = 1
  //   columnWidth = 100
  // }

  const styles = {
    collection: {
      display: 'grid',
      margin: '2rem 0',
      gridTemplateColumns: `repeat(${columnCount}, auto)`,
      gridTemplateRows: `repeat(${Math.ceil(items.length / grid.columns)}, auto)`,
      gridRowGap: `${rowGap}`,
      gridColumnGap: `${columnGap || rowGap}`
    }
  }

  const _itemRenderer = (item: any, index: number) => (
    <div key={v4()} className="item">{itemRenderer(item, index)}</div>
  )

  return (
    <div className={baseClass} style={styles.collection}>
      {items.map(_itemRenderer)}
    </div>
  )
}

Collection.defaultProps = {
  display: 'grid',
  grid: {
    columns: 3,
    gutter: '3rem 1.5rem',
  }
}

export default Collection

// @TODO SizeMe adds a hidden component. Need to remove that.
// export default withSize({ refreshRate: 1000 })(Collection)