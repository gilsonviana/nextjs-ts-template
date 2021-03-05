import { IProduct } from "@modules/Home/interface";

export interface ICategoryPageProps {
  products: IProduct[]
  category: ICategoryContextCurrent
}

export interface ICategoryContext {
  currentCategory: ICategoryContextCurrent | null
  updateCurrentCategory: (params: ICategoryContextCurrent) => void

  filter: ICategoryContextFilter
  setFilterKeyword: (search: string) => void
  setFilterPrice: (key: string, value: number) => void
  applyFilters: () => void

  orderBy: OrderByTypes
  updateOrderBy: (order: OrderByTypes) => void

  pagination: ICategoryContextPagination | null
  updatePagination: (params: ICategoryContextPagination) => void

  filteredProductList: IProduct[]
  clearFilters: () => void
  products: IProduct[]
  updateProducts: (newProducts: IProduct[]) => void
  resetProducts: () => void
}

export type OrderByTypes = 'menor' | 'maior' | string

export interface ICategoryContextPagination {
  page?: number
  size?: number
  totalSize?: number
  totalPage?: number
}

export interface ICategoryContextFilter {
  keyword: string
  price: {
    min: number 
    max: number
    [key: string]: number
  }
  retailStore: Array<{
    id: number | string | null
    name: string
  }>
}

export interface ICategoryContextCurrent {
  id: number | string
  name: string
}