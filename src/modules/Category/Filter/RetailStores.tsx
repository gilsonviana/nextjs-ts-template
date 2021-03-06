import React, { useContext, ReactNode } from 'react'
import { Form } from 'react-bootstrap'

import { CategoryContext } from '@modules/Category/context'

const FilterByRetailsStores: React.FC = () => {
  const { filter } = useContext(CategoryContext)

  const renderRetailStoreList = (): ReactNode | null => {
    return filter.retailStores.map(store =>
      <Form.Group key={`aside-filter-store-${store.id}`}>
        <Form.Check type="checkbox" label={store.name} />
      </Form.Group>
    )
  }

  return (
    <section className="mb-4">
      <h5>Lojas</h5>
      <Form>
        {renderRetailStoreList()}
      </Form>
    </section>
  )
}

export default FilterByRetailsStores