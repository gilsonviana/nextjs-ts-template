import React, { useState, useContext } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

import { CategoryContext } from '@modules/Category/context'

const FilterByPrice: React.FC = () => {
  const { setFilterPrice } = useContext(CategoryContext)
  
  const [formInputs, setFormInputs] = useState<{
    min: number,
    max: number,
    [key: string]: number
  }>({
    min: 0,
    max: 0
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.trim())
    if (value) {
      setFormInputs({
        ...formInputs,
        [e.target.name]: value
      })
      setFilterPrice(e.target.name, value)
    }
  }

  return (
    <section className="mb-4">
      <h5>Preço</h5>
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group as={Row} className="align-items-center mb-0">
          <Form.Label column sm="2" htmlFor="filter-form-control-min" className="text-black-50">Min:</Form.Label>
          <Col>
            <Form.Control value={formInputs.min ? formInputs.min: ''} id="filter-form-control-min" name="min" onChange={handleOnChange} size="sm" min={0} maxLength={5} />
          </Col>
          <Form.Label column sm="2" htmlFor="filter-form-control-max" className="text-black-50">Max:</Form.Label>
          <Col>
            <Form.Control value={formInputs.max ? formInputs.max: ''} id="filter-form-control-max" name="max" onChange={handleOnChange} size="sm" maxLength={5} />
          </Col>
        </Form.Group>
      </Form>
    </section>
  )
}

export default FilterByPrice