import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import { CategoryContext } from '@modules/Category/context'

const FilterByKeyword: React.FC = () => {
  const { setFilterKeyword, filter } = useContext(CategoryContext)

  return (
    <section className="mb-4">
      <h5>Palavra-chave</h5>
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group>
          <Form.Control value={filter.keyword} onChange={e => setFilterKeyword(e.target.value)} size="sm" type="search" />
        </Form.Group>
      </Form>
    </section>
  )
}

export default FilterByKeyword