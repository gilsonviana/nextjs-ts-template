import React, { createContext, ReactNode, useState } from 'react'

import { ICategoryContext, ICategoryContextPagination } from './interface'

export const CategoryContext = createContext<ICategoryContext | null>(null)

const CategoryProvider: React.FC<ReactNode> = ({ children }) => {
  const [pagination, setPagination] = useState<ICategoryContextPagination>({
    // set the initial page default
    page: 1
  })

  const updatePagination = (params: ICategoryContextPagination) => {
    setPagination({...pagination, ...params})
  }

  return (
    <CategoryContext.Provider value={{
      pagination,
      updatePagination
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider