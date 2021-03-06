import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { CategoryContext } from '@modules/Category/context'

import Keyword from './Keyword'
import Price from './Price'
import RetailStores from './RetailStores'

const CategoryFilter: React.FC = () => {
  const { applyFilters, clearFilters } = useContext(CategoryContext)

  const handleOnFilter = (): void => applyFilters()

  return (
    <React.Fragment>
      <Keyword />
      <Price />
      <Button block className="px-4" onClick={handleOnFilter} size="sm" variant="outline-secondary">Filtrar</Button>
      <Button block onClick={clearFilters} size="sm" variant="outline">Limpar Filtros</Button>
      <RetailStores />
    </React.Fragment>
  )
}

export default CategoryFilter