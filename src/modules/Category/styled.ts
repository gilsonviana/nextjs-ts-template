import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const ProductCard = styled(Card)`
  border: 0;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  width: 170px;
  display: inline-block;
  padding: 0 1rem;
  
  @media (min-width: 920px) {
    width: 220px;
  }

  svg {
    position: absolute;
    right: .5rem;
    top: .5rem;
  }

  .card-body {
    padding: 1rem .5rem;
  }

  .card-title {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .btn {
    font-size: 14px;
  }
`