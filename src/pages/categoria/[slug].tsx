import React, { useContext, useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'

import { ProductCard } from '@modules/Category/styled'
import CategoryOrderBy from '@modules/Category/OrderBy'
import { CategoryContext } from '@modules/Category/context'
import { ICategoryPageProps, ICategoryContext } from '@modules/Category/interface'
import { MENU_CATEGORIES_MOCK } from '@modules/Home/mock'

export default function CategoryPage(props: ICategoryPageProps) {
  const { pagination, updatePagination, products, updateProducts, resetProducts } = useContext(CategoryContext) as ICategoryContext
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
        url: `/offer/_category/${props.categoryId}/`,
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
      console.log(err.response)
    }
  }

  useEffect(() => {
    updateProducts(props.products)
    return () => resetProducts()
  }, [])

  return (
    <main className="bg-white pb-5">
      <Container fluid>
        <Row>
          <Col className="bg-light d-none d-lg-block" lg={{ span: 3 }} xl={{ span: 2 }}>
            <aside className="sticky-top pt-3">
              <section className="mb-5">
                <h5>Categoria</h5>
                <p>Nome da categoria</p>
              </section>
              <section className="mb-5">
                <h5>Preço</h5>
                <p>Filtra por preço</p>
              </section>
              <section className="mb-5">
                <h5>Lojas</h5>
                <p>Lista lojas</p>
              </section>
            </aside>
          </Col>
          <Col lg={{ offset: 1, span: 8 }}>
            <div className="pt-4 pb-5">
              <Row>
                <Col>
                  <h3>Produtos</h3>
                </Col>
                <Col lg={{ span: 3 }}>
                  <CategoryOrderBy />
                </Col>
              </Row>
            </div>
            {/* <Row> */}
              {products && products.map(product =>
                // <Col key={`product-${product.id}`}>
                  <ProductCard key={`product-${product.id}`} className="bg-transparent mx-0">
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Subtitle className="mb-2">{getProductName(product.name)}</Card.Subtitle>
                      <Card.Title>R${getProductPrice(product.price)}</Card.Title>
                      <Button block>Comprar</Button>
                    </Card.Body>
                  </ProductCard>
                // </Col>
              )}
              <Col xs={{ span: 12 }} className="text-center">
                <Button size="lg" disabled={isLoadingProducts} onClick={handleLoadMoreProducts}>Mais Ofertas</Button>
              </Col>
            {/* </Row> */}
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
        categoryId: filteredCategory?.id
      }
    }
  }
}