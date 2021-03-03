import React, { useContext, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'

import { ProductCard } from '@modules/Home/styled'
import CategoryOrderBy from '@modules/Category/OrderBy'
import { CategoryContext } from '@modules/Category/context'
import { ICategoryPageProps, ICategoryContext } from '@modules/Category/interface'
import { IProduct } from '@modules/Home/interface'

export default function CategoryPage({
  products,
  categoryId
}: ICategoryPageProps) {
  const { pagination, updatePagination } = useContext(CategoryContext) as ICategoryContext
  const [localProducts, setLocalProducts] = useState<IProduct[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState<boolean>(false)

  const getProductName = (name: string): string => {
    return name.split(';')[0].slice(0, 40)
  }

  const handleLoadMoreProducts = async () => {
    try {
      setIsLoadingProducts(true)
      const { data } = await axios({
        baseURL: process.env.NEXT_PUBLIC_LOMADEE_API_URL + '/' + process.env.NEXT_PUBLIC_LOMADEE_APP_TOKEN,
        url: `/offer/_category/${categoryId}/`,
        method: 'GET',
        params: {
          sourceId: process.env.NEXT_PUBLIC_LOMADEE_SOURCE_ID,
          page: pagination.page + 1
        }
      })
      updatePagination({ page: pagination.page + 1})
      setLocalProducts([...data.offers])
      setIsLoadingProducts(false)
    } catch (err) {
      setIsLoadingProducts(false)
      console.log(err.response)
    }
  }

  return (
    <main className="bg-white py-4">
      <Container>
        <Row>
          <Col lg={{ span: 3 }} xl={{ span: 2 }}>
            <h5>Categoria</h5>
          </Col>
          <Col>
            <div className="pt-2 pb-5">
              <Row>
                <Col>
                  <h3>Produtos</h3>
                </Col>
                <Col lg={{ span: 3 }}>
                  <CategoryOrderBy />
                </Col>
              </Row>
            </div>
            <Row>
              {[...products, ...localProducts].map(product =>
                <Col key={`product-${product.id}`}>
                  <ProductCard className="bg-transparent mx-0">
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Subtitle className="mb-2">{getProductName(product.name)}</Card.Subtitle>
                      <Card.Title>R${product.price}</Card.Title>
                      <Button block>Comprar</Button>
                    </Card.Body>
                  </ProductCard>
                </Col>
              )}
              <Button disabled={isLoadingProducts} className="mx-auto" onClick={handleLoadMoreProducts}>Mais Ofertas</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const categories = [77];

  // const paths = categories.map((category) => ({ params: { id: category } }));

  return {
    paths: [
      { params: { id: '77' } }
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axios({
    baseURL: process.env.NEXT_PUBLIC_LOMADEE_API_URL + '/' + process.env.NEXT_PUBLIC_LOMADEE_APP_TOKEN,
    url: `/offer/_category/${params.id}/`,
    method: 'GET',
    params: {
      sourceId: process.env.NEXT_PUBLIC_LOMADEE_SOURCE_ID
    }
  })

  if (data) {
    return {
      props: {
        products: data.offers,
        categoryId: params.id
      }
    }
  }
}