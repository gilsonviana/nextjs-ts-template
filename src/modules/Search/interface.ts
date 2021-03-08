import { IProduct } from "@modules/Home/interface";

export interface ISearchPageProps {
  keyword: string
}

export interface ISearchContext {
  currentCategory: ICategoryContextCurrent | null
  isCategorySectionVisible: boolean
  updateCurrentCategory: (params: ICategoryContextCurrent) => void
  toggleCategorySection: () => void

  filter: ICategoryContextFilter
  updateRetailsStores: (stores: ICategoryContextRetailStore[]) => void
  selectRetailStore: (selectedStore: ICategoryContextRetailStore) => void
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
  retailStores: ICategoryContextRetailStore[]
  selectedRetailsStores: ICategoryContextRetailStore[]
}

export interface ICategoryContextRetailStore {
  id: number | string
  name: string
  thumbnail?: string
  link?: string
}

export interface ICategoryContextCurrent {
  id: number | string
  name: string
}