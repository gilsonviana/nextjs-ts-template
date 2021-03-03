import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

interface IMenuCategory {
  imageUrl: string,
  label: string,
  id: string | number
}

const MENU_CATEGORIES_MOCK: IMenuCategory[] = [{
  imageUrl: '/assets/icons/png/smartphone-call-1.png',
  label: 'Smartphones',
  id: 77
}, {
  imageUrl: '/assets/icons/png/computer-1.png',
  label: 'Informática',
  id: 2
}, {
  imageUrl: '/assets/icons/png/television-1.png',
  label: 'TV',
  id: 2852
}, {
  imageUrl: '/assets/icons/png/headphone-1.png',
  label: 'Eletrônicos',
  id: 1
}, {
  imageUrl: '/assets/icons/png/blender-1.png',
  label: 'Eletrodomésticos',
  id: 116
}, {
  imageUrl: '/assets/icons/png/shirt-1.png',
  label: 'Moda',
  id: 2468
}, {
  imageUrl: '/assets/icons/png/couch-1.png',
  label: 'Móveis',
  id: 2708
}, {
  imageUrl: '/assets/icons/png/table-lamp-1.png',
  label: 'Decoração',
  id: 2701
}, {
  imageUrl: '/assets/icons/png/soccer-1.png',
  label: 'Esporte',
  id: 1328
}, {
  imageUrl: '/assets/icons/png/console-1.png',
  label: 'Games',
  id: 2376
}]

const NoWrapCol = styled(Col)`
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;    

  &::-webkit-scrollbar {
    display: none;
  }
`

const NoWrapRow = styled(Row)`
  flex-wrap: nowrap;
`

const MenuCategoriesWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
`

const MenuCategory = styled.a`
  display: block;
  overflow: hidden;
  color: #f8f9fa;
  min-width: 110px;
  
  &:hover {
    color: #f8f9fa;
  }

  img {
    width: 40px;
    max-height: 40px;
  }

  p {
    font-size: 14px;
  }
`

const SearchSuggestionWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

export default function Home() {
  const handleSectionNavigateRight = (sectionId: string) => {
    const ele = document.getElementById(sectionId)
    if (ele) {
      ele.scrollLeft = ele.scrollLeft + 237
    }
  }

  const handleSectionNavigateLeft = (sectionId: string) => {
    const ele = document.getElementById(sectionId)
    if (ele) {
      ele.scrollLeft = ele.scrollLeft - 237
    }
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
      <section className="bg-primary pt-3 p-lg-5 mb-5">
        <Container>
          <Form inline>
            <FormControl type="text" placeholder="Estou procurando por..." className="mr-sm-2 w-100 p-4" />
          </Form>
          <SearchSuggestionWrapper className="mx-lg-5 my-3 my-lg-2 text-light">
            <span className="mr-2">Populares:</span>
            <Button variant="outline-light mr-2">motorola g7</Button>
            <Button variant="outline-light mr-2">maquina de lavar</Button>
            <Button variant="outline-light mr-2">macbook pro</Button>
          </SearchSuggestionWrapper>
          <MenuCategoriesWrapper className="mt-4 mt-lg-5">
            {MENU_CATEGORIES_MOCK.map(category =>
              <Link key={`menu-category-${category.id}`} href={`/categoria/${category.id}`} as={`/categoria/${category.id}`}>
                <MenuCategory className="text-decoration-none" href={`/${category.id}`}>
                  <img src={category.imageUrl} />
                  <p>{category.label}</p>
                </MenuCategory>
              </Link>
            )}
          </MenuCategoriesWrapper>
        </Container>
      </section>
      <section className="mb-5">
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
                  <Col>
                    <Card className="border-0 bg-white mx-auto" style={{ maxWidth: '237px' }}>
                      <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$" />
                      <Card.Body>
                        <Card.Subtitle className="mb-2">Samsung X</Card.Subtitle>
                        <Card.Title>R$768</Card.Title>
                        <Button block>Comprar com desconto</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="bg-white border-0 mx-auto" style={{ maxWidth: '237px' }}>
                      <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$" />
                      <Card.Body>
                        <Card.Subtitle className="mb-2">Samsung X</Card.Subtitle>
                        <Card.Title>R$768</Card.Title>
                        <Button block>Comprar com desconto</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="bg-white border-0 mx-auto" style={{ maxWidth: '237px' }}>
                      <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$" />
                      <Card.Body>
                        <Card.Subtitle className="mb-2">Samsung X</Card.Subtitle>
                        <Card.Title>R$768</Card.Title>
                        <Button block>Comprar com desconto</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="border-0 bg-white mx-auto" style={{ maxWidth: '237px' }}>
                      <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$" />
                      <Card.Body>
                        <Card.Subtitle className="mb-2">Samsung X</Card.Subtitle>
                        <Card.Title>R$768</Card.Title>
                        <Button block>Comprar com desconto</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="bg-white border-0 mx-auto" style={{ maxWidth: '237px' }}>
                      <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$" />
                      <Card.Body>
                        <Card.Subtitle className="mb-2">Samsung X</Card.Subtitle>
                        <Card.Title>R$768</Card.Title>
                        <Button block>Comprar com desconto</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="bg-white border-0 mx-auto" style={{ maxWidth: '237px' }}>
                      <Card.Img variant="top" src="https://images.samsung.com/is/image/samsung/br-galaxy-a01-a015-sm-a015mzbezto-front-237503098?$720_576_PNG$" />
                      <Card.Body>
                        <Card.Subtitle className="mb-2">Samsung X</Card.Subtitle>
                        <Card.Title>R$768</Card.Title>
                        <Button block>Comprar com desconto</Button>
                      </Card.Body>
                    </Card>
                  </Col>
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
