import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import axios from 'axios'

import { MENU_CATEGORIES_MOCK } from '@modules/Home/mock'

import Page from '@modules/Category'
import CategoryProvider from '@modules/Category/context'
import { ICategoryPageProps } from '@modules/Category/interface'

const CategoryPage: NextPage<ICategoryPageProps> = ({ category, products }) => {
  return (
    <CategoryProvider>
      <Page products={products} category={category}/>
    </CategoryProvider>
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

export default CategoryPage