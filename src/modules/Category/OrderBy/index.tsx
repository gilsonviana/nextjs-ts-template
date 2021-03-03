import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import { CategoryContext } from '../context'

const CategoryOrderBy: React.FC = () => {
  const { orderBy, updateOrderBy } = useContext(CategoryContext)

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'menor':
        return updateOrderBy('menor')
      case 'maior':
        return updateOrderBy('maior')
      default:
        return updateOrderBy(null)
    }
  }

  return (
    <div>
      <span style={{ fontSize: '.8rem' }}>Ordenar por</span>
      <Form.Control value={orderBy} size="sm" as="select" onChange={handleOnChange}>
        <option value="">Mais relevante</option>
        <option value="menor">Menor preço</option>
        <option value="maior">Maior preço</option>
      </Form.Control>
    </div>
  )
}

export default CategoryOrderBy