import Head from "next/head"
import { Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Home() {

  return (
    <div className="bg-light">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-primary p-5 mb-5">
        <Container>
          <Form inline>
            <FormControl type="text" placeholder="Estou procurando por..." className="mr-sm-2 w-100 p-4" />
          </Form>
          <div className="mx-5 my-2 text-light">
            <span className="mr-2">Populares:</span>
            <Button variant="outline-light mr-2">motorola g7</Button>
            <Button variant="outline-light mr-2">maquina de lavar</Button>
            <Button variant="outline-light mr-2">macbook pro</Button>
          </div>
        </Container>
      </section>
      <section className="mb-5">
        <Container>
          <h3 className="mb-4">Descontos incríveis</h3>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={{ span: 2 }} md={{ span: 1 }}>
                <div className="ml-auto bg-white border-bottom d-flex justify-content-center align-items-center" style={{ width: 29, height: 35 }}>
                  <GoChevronLeft />
                </div>
              </Col>
              <Col className="">
                <Row>
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
                </Row>
              </Col>
              <Col xs={{ span: 2 }} md={{ span: 1 }}>
                <div className="bg-white border-bottom d-flex justify-content-center align-items-center" style={{ width: 29, height: 35 }}>
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
