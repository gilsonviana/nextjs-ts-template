import { IProduct } from "@modules/Home/interface";

export interface ICategoryPageProps {
  products: IProduct[]
  categoryId: number | string
}

export interface ICategoryContext {
  pagination: ICategoryContextPagination | null
  updatePagination: (params: ICategoryContextPagination) => void
}

export interface ICategoryContextPagination {
  page?: number
  size?: number
  totalSize?: number
  totalPage?: number
}