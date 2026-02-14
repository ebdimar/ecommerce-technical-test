'use client'

import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { searchMobiles } from '@/lib/actions'
import { Mobile } from '@/types'
import { SearchBar } from './SearchBar'
import { ItemList } from './ItemList'
import { removeDuplicates } from '@/lib/utils'

interface ProductsContainerProps {
  initialItems: Mobile[]
}

export function ProductsContainer({ initialItems }: ProductsContainerProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Mobile[]>(initialItems)
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (!debouncedQuery) {
      setResults(initialItems)
      return
    }

    const search = async () => {
      try {
        const data = await searchMobiles(debouncedQuery)
        const unicData = removeDuplicates(data, 'id')
        setResults(unicData)
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      }
    }

    search()
  }, [debouncedQuery, initialItems])

  return (
    <>
      <SearchBar query={query} onQueryChange={setQuery} resultsCount={results.length} />
      <ItemList items={results} />
    </>
  )
}
