import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import SearchProvider from '@modules/Search/context'
import Page from '@modules/Search/index'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const [searchQuery] = useState<string>(() => router.query.SEARCH_QUERY as string)
  
  return (
    <SearchProvider>
      <Page keyword={searchQuery} />
    </SearchProvider>
  )
}

export default SearchPage