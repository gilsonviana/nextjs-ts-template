import React, { useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { FiFilter } from 'react-icons/fi'

import Aside from '@modules/Category/Aside'
import { ProductCard } from '@modules/Category/styled'
import CategoryOrderBy from '@modules/Category/OrderBy'
import { CategoryContext } from '@modules/Category/context'
import { ICategoryPageProps, ICategoryContext } from '@modules/Category/interface'
import { MENU_CATEGORIES_MOCK } from '@modules/Home/mock'

export default function CategoryPage(props: ICategoryPageProps) {
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
  } = useContext(CategoryContext) as ICategoryContext
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)

  const getProductName = (name: string): string => {
    return name.split(';')[0].slice(0, 40)
  }

  const getProductPrice = (price: number): string => price.toFixed(2)

  const handleLoadMoreProducts = async () => {
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
    console.log(props.products.map(product => ({
      id: product.store.id,
      name: product.store.name,
      thumbnail: product.store?.thumbnail,
      link: product.store?.link
    })));
    
    const retailStores = props.products.map(product => ({
      id: product.store.id,
      name: product.store.name,
      thumbnail: product.store?.thumbnail,
      link: product.store?.link
    })).filter((product, i, arr) => {
      console.log(arr.findIndex(() => product.id), " ---", i)
      return arr.findIndex(inner => inner.id) === i
    })

    console.log("retailStores --->", retailStores);

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
                    <Button variant="light" onClick={toggleCategorySection}>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = MENU_CATEGORIES_MOCK.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filteredCategory = MENU_CATEGORIES_MOCK.find(category => category.slug === params.slug)

  const { data } = await axios({
    baseURL: process.env.NEXT_PUBLIC_LOMADEE_API_URL + '/' + process.env.NEXT_PUBLIC_LOMADEE_APP_TOKEN,
    url: `/offer/_category/${filteredCategory?.id}/`,
    method: 'GET',
    params: {
      sourceId: process.env.NEXT_PUBLIC_LOMADEE_SOURCE_ID
    }
  })

  if (data) {
    return {
      props: {
        products: data.offers,
        category: filteredCategory
      }
    }
  }
}