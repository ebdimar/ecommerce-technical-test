import { fetchItems, searchItems, fetchItemById } from '@/lib/api'

const mockData = [{ id: '1', name: 'iPhone 15' }]

beforeEach(() => {
    global.fetch = jest.fn()
})

afterEach(() => {
    jest.resetAllMocks()
})

describe('fetchItems', () => {
    it('should return data correctly', async () => {
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        })

        const result = await fetchItems(10)
        expect(result).toEqual(mockData)
    })

    it('should throw error if response is not ok', async () => {
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
        })

        await expect(fetchItems(10)).rejects.toThrow('Response status: 404')
    })
})

describe('searchItems', () => {
    it('should return empty array if query is empty', async () => {
        const result = await searchItems('')
        expect(result).toEqual([])
        expect(global.fetch).not.toHaveBeenCalled()
    })

    it('should return data correctly', async () => {
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        })

        const result = await searchItems('iphone')
        expect(result).toEqual(mockData)
    })
})

describe('fetchItemById', () => {
    it('should return item correctly', async () => {
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData[0],
        })

        const result = await fetchItemById('1')
        expect(result).toEqual(mockData[0])
    })

    it('should throw error if response is not ok', async () => {
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        })

        await expect(fetchItemById('1')).rejects.toThrow('Response status: 500')
    })
})
