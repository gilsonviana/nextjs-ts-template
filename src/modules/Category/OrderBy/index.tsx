import React from 'react'
import { Form } from 'react-bootstrap'

const CategoryOrderBy: React.FC = () => {
  return (
    <div>
      <span style={{fontSize: '.8rem'}}>Ordenar por</span>
      <Form.Control as="select">
        <option>Mais relevante</option>
        <option>Menor preço</option>
        <option>Maior preço</option>
      </Form.Control>
    </div>
  )
}

export default CategoryOrderBy