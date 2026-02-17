export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const apiKey = process.env.NEXT_PUBLIC_API_KEY

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  if (!apiKey || !apiUrl) {
    throw new Error("API key or API url aren't configured")
  }

  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      headers: {
        accept: 'application/json',
        'x-api-key': apiKey,
      },
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Unknown error')
    throw error
  }
}

export async function fetchItems<T>(limit: number): Promise<T[]> {
  return fetchFromAPI<T[]>(`?limit=${limit}`)
}

export async function searchItems<T>(query: string): Promise<T[]> {
  if (!query.trim()) {
    return []
  }
  return fetchFromAPI<T[]>(`?search=${encodeURIComponent(query)}`)
}

export async function fetchItemById<T>(id: string): Promise<T> {
  return fetchFromAPI<T>(`/${id}`)
}
