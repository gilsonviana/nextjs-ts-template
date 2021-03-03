import { IProduct } from "@modules/Home/interface";

export interface ICategoryPageProps {
  products: IProduct[]
  categoryId: number | string
}

export interface ICategoryContext {
  orderBy: OrderByTypes
  updateOrderBy: (order: OrderByTypes) => void

  pagination: ICategoryContextPagination | null
  updatePagination: (params: ICategoryContextPagination) => void

  products: IProduct[]
  updateProducts: (newProducts: IProduct[]) => void
}

export type OrderByTypes = 'menor' | 'maior' | string

export interface ICategoryContextPagination {
  page?: number
  size?: number
  totalSize?: number
  totalPage?: number
}