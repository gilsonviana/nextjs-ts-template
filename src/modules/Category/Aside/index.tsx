import React, { useContext } from 'react'

import { CategoryContext } from '@modules/Category/context'
import Filter from '@modules/Category/Filter'

const CategoryAside: React.FC = () => {
  const { currentCategory } = useContext(CategoryContext)

  return (
    <aside className="sticky-top pt-3">
      <section className="mb-4">
        <h5>Categoria</h5>
        <p className="text-black-50">{currentCategory?.name}</p>
      </section>
      <Filter />
      {/* <section className="mb-5">
                <h5>Lojas</h5>
                <p>Lista lojas</p>
              </section> */}
    </aside>
  )
}

export default CategoryAside