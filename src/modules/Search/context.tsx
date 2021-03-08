import { IProduct } from '@modules/Home/interface'
import React, { createContext, ReactNode, useState } from 'react'

import { ISearchContext, ICategoryContextCurrent, ICategoryContextFilter, ICategoryContextPagination, ICategoryContextRetailStore, OrderByTypes } from './interface'

export const SearchContext = createContext<ISearchContext | null>(null)

const SearchProvider: React.FC<ReactNode> = ({ children }) => {
  /**
   * Current Category
   */
  const [currentCategory, setCurrentCategory] = useState<ICategoryContextCurrent>(null)
  const [isCategorySectionVisible, setIsCategorySectionVisible] = useState<boolean>(false)

  const toggleCategorySection = () => setIsCategorySectionVisible(!isCategorySectionVisible)

  const updateCurrentCategory = (params: ICategoryContextCurrent): void => setCurrentCategory(params)

  /**
   * Filter
   */
  const [filter, setFilter] = useState<ICategoryContextFilter>({
    keyword: '',
    price: {
      min: 0,
      max: 0
    },
    retailStores: [],
    selectedRetailsStores: []
  })

  const updateRetailsStores = (stores: ICategoryContextRetailStore[]) => setFilter({
    ...filter,
    retailStores: stores
  })

  const selectRetailStore = (selectedStore: ICategoryContextRetailStore) => setFilter({
    ...filter,
    selectedRetailsStores: [
      ...filter.selectedRetailsStores,
      selectedStore
    ]
  })

  const setFilterKeyword = (search: string): void => setFilter({
    ...filter,
    keyword: search.toLowerCase()
  })

  const setFilterPrice = (key: string, value: number) => setFilter({
    ...filter,
    price: {
      ...filter.price,
      [key]: value
    }
  })

  const applyFilters = (): void => {
    const productList = products
    const { keyword, price } = filter
    const hasKeyword = keyword.trim()
    const hasPriceLimit = Object.values(price)

    let result = productList

    if (hasKeyword) {
      result = productList.filter(product => product.name.toLowerCase().includes(keyword))
    }

    if (hasPriceLimit) {
      result = result.filter(product => product.price >= price.min && product.price <= price.max)
    }
    
    setFilteredProductList([...result])
  }

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
  const [filteredProductList, setFilteredProductList] = useState<IProduct[]>([])
  const [products, setProducts] = useState<IProduct[]>([])

  const clearFilters = () => {
    setFilter({
      ...filter,
      keyword: '',
      price: {
        min: 0,
        max: 0
      }
    })
    setFilteredProductList([])
  }

  /**
   * Add dinamically fetched products to produts
   */
  const updateProducts = (newProducts: IProduct[]) => setProducts([...products,  ...newProducts])

  /**
   * Reset product to initial state
   */
  const resetProducts = () => setProducts([])

  return (
    <SearchContext.Provider value={{
      currentCategory,
      isCategorySectionVisible,
      updateCurrentCategory,
      toggleCategorySection,
      filter,
      updateRetailsStores,
      selectRetailStore,
      setFilterKeyword,
      setFilterPrice,
      applyFilters,
      orderBy,
      updateOrderBy,
      pagination,
      updatePagination,
      filteredProductList,
      clearFilters,
      products,
      updateProducts,
      resetProducts
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider