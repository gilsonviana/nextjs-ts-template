import styled from 'styled-components'
import { Col, Row, Card } from 'react-bootstrap'

export const NoWrapCol = styled(Col)`
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;    

  &::-webkit-scrollbar {
    display: none;
  }
`

export const NoWrapRow = styled(Row)`
  flex-wrap: nowrap;
`

export const MenuCategoriesWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;    

  &::-webkit-scrollbar {
    display: none;
  }
`

export const MenuCategory = styled.a`
  display: block;
  // overflow: hidden;
  color: #f8f9fa;
  // min-width: 90px;
  padding: 0 .8rem;

  
  &:hover {
    color: #f8f9fa;
  }

  img {
    width: 30px;
    max-height: 30px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    min-width: 110px;

    img {
      width: 40px;
      max-height: 40px;
    }
  }
`

export const SearchSuggestionWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;    

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ProductCard = styled(Card)`
  border: 0;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 200px;

  svg {
    position: absolute;
    right: .5rem;
    top: .5rem;
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .btn {
    font-size: 14px;
  }
`