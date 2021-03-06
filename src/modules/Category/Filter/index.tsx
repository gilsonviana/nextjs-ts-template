import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { CategoryContext } from '@modules/Category/context'

import Keyword from './Keyword'
import Price from './Price'

const CategoryFilter: React.FC = () => {
  const { applyFilters, clearFilters } = useContext(CategoryContext)

  const handleOnFilter = (): void => applyFilters()

  return (
    <React.Fragment>
      <Keyword />
      <Price />
      <Button onClick={clearFilters} size="sm" variant="outline">Limpar Filtros</Button>
      <Button className="px-4" onClick={handleOnFilter} size="sm" variant="outline-secondary">Filtrar</Button>
    </React.Fragment>
  )
}

export default CategoryFilter