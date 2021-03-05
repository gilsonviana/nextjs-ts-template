export interface IMenuCategory {
  imageUrl: string
  name: string
  id: string | number
  slug: string
}

export interface IProduct {
  id: number
  name: string
  link: string
  thumbnail: string
  price: number
  category?: {
    id: number
    name: string
    link: string
  }
  discount?: number
  installment?: {
    quantity: number
    value: number
  }
  store?: {
    id: number
    name: string
    thumbnail: string
    link: string
  }
}