import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { IoCloseSharp } from 'react-icons/io5'

import { CategoryContext } from '@modules/Category/context'
import Filter from '@modules/Category/Filter'

const CategoryAside: React.FC = () => {
  const { 
    currentCategory,
    toggleCategorySection
 } = useContext(CategoryContext)

  return (
    <aside className="sticky-top py-3">
      <section className="mb-4">
        <div className="d-flex justify-content-between">
          <h5>Categoria</h5>
          <Button onClick={toggleCategorySection} type="button" variant="light" aria-label="Close"><IoCloseSharp size="1.5rem" /></Button>
        </div>
        <h4 className="text-black-50">{currentCategory?.name}</h4>
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