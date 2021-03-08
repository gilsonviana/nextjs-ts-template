import React, { useEffect, FormEvent, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { AiFillFire } from 'react-icons/ai'

import { MenuCategoriesWrapper, MenuCategory, NoWrapCol, NoWrapRow, ProductCard, SearchSuggestionWrapper } from '@modules/Home/styled'
import { MENU_CATEGORIES_MOCK, HOME_PRODUCT_LIST } from '@modules/Home/mock'

const Home: NextPage = () => {
  const router = useRouter()

  const [searchValue, setSearchValue] = useState<string>('')

  const handleSectionNavigateRight = (sectionId: string) => {
    const ele = document.getElementById(sectionId)
    if (ele) {
      ele.scrollLeft = ele.scrollLeft + 230
    }
  }

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value.trim())

  const handleSectionNavigateLeft = (sectionId: string) => {
    const ele = document.getElementById(sectionId)
    if (ele) {
      ele.scrollLeft = ele.scrollLeft - 230
    }
  }

  const handleFormOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push({
      pathname: '/search',
      query: {
        SEARCH_QUERY: searchValue
      }
    })
  }

  useEffect(() => {
    const ele = document.getElementById('sessao-destaque')
    let removeListener = (_: any) => { return }

    if (ele) {
      ele.style.cursor = 'grab'

      let pos = { top: 0, left: 0, x: 0, y: 0 }

      const mouseDownHandler = (e: any) => {
        ele.style.cursor = 'grabbing'
        ele.style.userSelect = 'none'

        pos = {
          ...pos,
          left: ele.scrollLeft,
          x: e.clientX,
        }

        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('mouseup', mouseUpHandler)
      }

      removeListener = mouseDownHandler

      const mouseMoveHandler = (e: any) => {
        const dx = e.clientX - pos.x

        ele.scrollLeft = pos.left - dx
      }

      const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      }

      ele.addEventListener('mousedown', mouseDownHandler)
    }

    return () => {
      ele.removeEventListener('mousedown', removeListener)
    }
  }, [])

  return (
    <div className="bg-light">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-primary pt-3 p-lg-5">
        <Container>
          <Form inline onSubmit={handleFormOnSubmit}>
            <FormControl onChange={handleSearchOnChange} type="text" placeholder="Estou procurando por..." className="mr-sm-2 w-100 p-4" />
          </Form>
          <SearchSuggestionWrapper className="mx-lg-5 my-3 my-lg-2 text-light">
            <span className="mr-2">Populares:</span>
            <Button variant="outline-light mr-2">motorola g7</Button>
            <Button variant="outline-light mr-2">maquina de lavar</Button>
            <Button variant="outline-light mr-2">macbook pro</Button>
          </SearchSuggestionWrapper>
          <MenuCategoriesWrapper className="mt-4 mt-lg-5">
            {MENU_CATEGORIES_MOCK.map(category =>
              <Link key={`menu-category-${category.id}`} href={`/categoria/${category.slug}`} as={`/categoria/${category.slug}`}>
                <MenuCategory className="text-decoration-none" href={`/${category.id}`}>
                  <img src={category.imageUrl} />
                  <p className="mt-2">{category.name}</p>
                </MenuCategory>
              </Link>
            )}
          </MenuCategoriesWrapper>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <h3 className="mb-4">Descontos incríveis</h3>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={{ span: 2 }} md={{ span: 1 }}>
                <div onClick={() => handleSectionNavigateLeft('sessao-destaque')} className="ml-auto bg-white border-bottom d-flex justify-content-center align-items-center" style={{ width: 29, height: 35 }}>
                  <GoChevronLeft />
                </div>
              </Col>
              <NoWrapCol id="sessao-destaque">
                <NoWrapRow>
                  {HOME_PRODUCT_LIST.map(product =>
                    <Col key={`home-product-${product.id}`}>
                      <ProductCard>
                        <AiFillFire size="1.5rem" className="text-danger"/>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                          <Card.Subtitle className="mb-2">{product.name}</Card.Subtitle>
                          <Card.Title>R${product.price}</Card.Title>
                          <Button block>Comprar</Button>
                        </Card.Body>
                      </ProductCard>
                    </Col>
                  )}
                </NoWrapRow>
              </NoWrapCol>
              <Col xs={{ span: 2 }} md={{ span: 1 }}>
                <div onClick={() => handleSectionNavigateRight('sessao-destaque')} className="bg-white border-bottom d-flex justify-content-center align-items-center" style={{ width: 29, height: 35 }}>
                  <GoChevronRight />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Home