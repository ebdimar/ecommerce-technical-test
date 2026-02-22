'use client'

import styles from '@/styles/pages/home/SearchBar.module.css'

interface SearchBarProps {
  query: string
  onQueryChange: (query: string) => void
  resultsCount: number
}

export function SearchBar({ query, onQueryChange, resultsCount }: SearchBarProps) {
  return (
    <search className={styles.searchBarContainer}>
      <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.searchBox}
          type="search"
          placeholder="Search for a smartphone..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className={styles.clearButton}
            aria-label="Clear search"
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.22887 3.66225L0 6.72967L0.626131 7.3245L3.855 4.25707L7.08387 7.3245L7.71 6.72967L4.48113 3.66225L7.71 0.594825L7.08387 0L3.855 3.06742L0.626131 0L0 0.594825L3.22887 3.66225Z"
                fill="black"
              />
            </svg>
          </button>
        )}
      </form>

      <p className={styles.searchBarResults}>
        {resultsCount} RESULT{resultsCount !== 1 ? 'S' : ''}
      </p>
    </search>
  )
}
