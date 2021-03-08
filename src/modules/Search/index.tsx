import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { FiFilter } from 'react-icons/fi'

import Aside from './Aside'
import { SearchContext } from './context'
import { ISearchPageProps } from './interface'
import CategoryOrderBy from './OrderBy'
import { ProductCard } from './styled'

const CategoryPageView: React.FC<ISearchPageProps> = (props) => {
  const {
    pagination,
    updatePagination,
    products,
    updateProducts,
    resetProducts,
    updateCurrentCategory,
    filteredProductList,
    updateRetailsStores,
    isCategorySectionVisible,
    toggleCategorySection
  } = useContext(SearchContext)
  const router = useRouter()
  const [searchQuery] = useState<string>(() => router.query.SEARCH_QUERY as string)
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)

  const TOTAL_SIZE = 12334

  const getProductName = (name: string): string => {
    return name.split(';')[0].slice(0, 40)
  }

  const getProductPrice = (price: number): string => price.toFixed(2)

  // const handleLoadMoreProducts = async (): Promise<void> => {
  //   try {
  //     setIsLoadingProducts(true)
  //     const { data } = await axios({
  //       baseURL: process.env.NEXT_PUBLIC_LOMADEE_API_URL + '/' + process.env.NEXT_PUBLIC_LOMADEE_APP_TOKEN,
  //       url: `/offer/_category/${props.category.id}/`,
  //       method: 'GET',
  //       params: {
  //         sourceId: process.env.NEXT_PUBLIC_LOMADEE_SOURCE_ID,
  //         page: pagination.page + 1
  //       }
  //     })
  //     updatePagination({ page: pagination.page + 1 })
  //     updateProducts(data.offers)
  //     setIsLoadingProducts(false)
  //   } catch (err) {
  //     setIsLoadingProducts(false)
  //   }
  // }

  const renderCategorySectionOnMobile = useCallback((): ReactNode | void => {
    if (isCategorySectionVisible) {
      return (
        <Col className="bg-light" lg={{ span: 3 }} xl={{ span: 2 }}>
          <Aside />
        </Col>
      )
    }
  }, [isCategorySectionVisible])

  const renderProductList = (): ReactNode | void => {
    if (filteredProductList.length) {
      return filteredProductList.map(product =>
        <ProductCard key={`product-${product.id}`} className="bg-transparent mx-0">
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Subtitle className="mb-2">{getProductName(product.name)}</Card.Subtitle>
            <Card.Title>R${getProductPrice(product.price)}</Card.Title>
            <Button block>Comprar</Button>
          </Card.Body>
        </ProductCard>
      )
    }
    if (products.length) {
      return products.map(product =>
        <ProductCard key={`product-${product.id}`} className="bg-transparent mx-0">
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Subtitle className="mb-2">{getProductName(product.name)}</Card.Subtitle>
            <Card.Title>R${getProductPrice(product.price)}</Card.Title>
            <Button block>Comprar</Button>
          </Card.Body>
        </ProductCard>
      )
    }
  }

  // useEffect(() => {
  //   const searchByKeyword = async () => {
  //     try {
  //       const { data } = await axios({
  //         baseURL: process.env.NEXT_PUBLIC_LOMADEE_API_URL + '/' + process.env.NEXT_PUBLIC_LOMADEE_APP_TOKEN,
  //         url: `/offer/_search/`,
  //         method: 'GET',
  //         params: {
  //           sourceId: process.env.NEXT_PUBLIC_LOMADEE_SOURCE_ID,
  //           keyword: searchQuery,
  //           size: 24,
  //           // page: pagination.page + 1
  //         }
  //       })
  //       console.log("searchByKeyword", data);
  //     } catch (error) {
  //       console.log("searchByKeyword => ERROR =>", error.response.data)
  //     }

  //   }
  //   searchByKeyword()
  // }, [])

  return (
    <main className="bg-white pb-5">
      <Container fluid>
        <Row>
          <Col className="bg-light d-none d-lg-block" lg={{ span: 3 }} xl={{ span: 2 }}>
            <aside className="sticky-top py-3">
              <section className="mb-4">
                <h5>Categorias</h5>
              </section>
            </aside>
          </Col>
          <Col lg={{ offset: 1, span: 8 }}>
            <div className="pt-4 pb-5">
              <Row>
                <Col>
                  <div className="d-flex justify-content-between">
                    <h3>Busca</h3>
                    <Button variant="light" onClick={toggleCategorySection} className="d-lg-none">
                      <FiFilter />
                      <small className="ml-2">Filtros</small>
                    </Button>
                  </div>
                  <p className="text-black-50">Foram encontrados {TOTAL_SIZE} resultados para <b>"{searchQuery}"</b></p>
                </Col>
                <Col lg={{ span: 3 }}>
                  <CategoryOrderBy />
                </Col>
              </Row>
            </div>
            {renderProductList()}
            <Col xs={{ span: 12 }} className="text-center">
              {/* <Button size="lg" disabled={isLoadingProducts} onClick={handleLoadMoreProducts}>Mais Ofertas</Button> */}
              <Button size="lg" disabled={isLoadingProducts}>Mais Ofertas</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default CategoryPageView