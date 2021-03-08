import axios from 'axios'
import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FiFilter } from 'react-icons/fi'
import Aside from './Aside'
import { CategoryContext } from './context'
import { ICategoryPageProps } from './interface'
import CategoryOrderBy from './OrderBy'
import { ProductCard } from './styled'

const CategoryPageView: React.FC<ICategoryPageProps> = (props) => {
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
  } = useContext(CategoryContext)
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)

  const getProductName = (name: string): string => {
    return name.split(';')[0].slice(0, 40)
  }

  const getProductPrice = (price: number): string => price.toFixed(2)

  const handleLoadMoreProducts = async (): Promise<void> => {
    try {
      setIsLoadingProducts(true)
      const { data } = await axios({
        baseURL: process.env.NEXT_PUBLIC_LOMADEE_API_URL + '/' + process.env.NEXT_PUBLIC_LOMADEE_APP_TOKEN,
        url: `/offer/_category/${props.category.id}/`,
        method: 'GET',
        params: {
          sourceId: process.env.NEXT_PUBLIC_LOMADEE_SOURCE_ID,
          page: pagination.page + 1
        }
      })
      updatePagination({ page: pagination.page + 1 })
      updateProducts(data.offers)
      setIsLoadingProducts(false)
    } catch (err) {
      setIsLoadingProducts(false)
    }
  }

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

  useEffect(() => {
    const retailStores = props.products.map(product => ({
      id: product.store.id,
      name: product.store.name,
      thumbnail: product.store?.thumbnail,
      link: product.store?.link
    })).filter((_, i, arr) => {
      return arr.findIndex(inner => inner.id) === i
    })

    updateRetailsStores(retailStores)
    updateCurrentCategory(props.category)
    updateProducts(props.products)
    return () => resetProducts()
  }, [])

  return (
    <main className="bg-white pb-5">
      <Container fluid>
        <Row>
          <Col className="bg-light d-none d-lg-block" lg={{ span: 3 }} xl={{ span: 2 }}>
            <Aside />
          </Col>
          {renderCategorySectionOnMobile()}
          <Col lg={{ offset: 1, span: 8 }}>
            <div className="pt-4 pb-5">
              <Row>
                <Col>
                  <div className="d-flex justify-content-between">
                    <h3>Produtos</h3>
                    <Button variant="light" onClick={toggleCategorySection} className="d-lg-none">
                      <FiFilter />
                      <small className="ml-2">Filtros</small>
                    </Button>
                  </div>
                </Col>
                <Col lg={{ span: 3 }}>
                  <CategoryOrderBy />
                </Col>
              </Row>
            </div>
            {renderProductList()}
            <Col xs={{ span: 12 }} className="text-center">
              <Button size="lg" disabled={isLoadingProducts} onClick={handleLoadMoreProducts}>Mais Ofertas</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default CategoryPageView