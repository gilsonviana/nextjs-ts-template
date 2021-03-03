import { IProduct } from '@modules/Home/interface'
import React, { createContext, ReactNode, useState } from 'react'

import { ICategoryContext, ICategoryContextPagination, OrderByTypes } from './interface'

export const CategoryContext = createContext<ICategoryContext | null>(null)

const CategoryProvider: React.FC<ReactNode> = ({ children }) => {
  /**
   * OrderBy
   */
  const [orderBy, setOrderBy] = useState<OrderByTypes>("")

  const updateOrderBy = (order: OrderByTypes) => {
    if (order === 'menor') {
      setProducts(products.sort((a, b) => {
        if (a.price > b.price) return 1
        if (a.price < b.price) return -1
        return 0
      }))
    }
    if (order === 'maior') {
      setProducts(products.sort((a, b) => {
        if (b.price > a.price) return 1
        if (b.price < a.price) return -1
        return 0
      }))
    }
    setOrderBy(order)
  }

  /**
   * Pagination
   */
  const [pagination, setPagination] = useState<ICategoryContextPagination>({
    // set the initial page default
    page: 1
  })

  const updatePagination = (params: ICategoryContextPagination) => setPagination({...pagination, ...params})

  /**
   * Products
   */
  const [products, setProducts] = useState<IProduct[]>([])

  const updateProducts = (newProducts: IProduct[]) => setProducts([...products,  ...newProducts])

  return (
    <CategoryContext.Provider value={{
      orderBy,
      updateOrderBy,
      pagination,
      updatePagination,
      products,
      updateProducts
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider