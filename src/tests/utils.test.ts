import { removeDuplicates } from '@/lib/utils'

describe('removeDuplicates', () => {
    it('should remove duplicate items by key', () => {
        const items = [
            { id: '1', name: 'iPhone' },
            { id: '1', name: 'iPhone' },
            { id: '2', name: 'Samsung' },
        ]
        const result = removeDuplicates(items, 'id')
        expect(result).toHaveLength(2)
    })

    it('should return same array if no duplicates', () => {
        const items = [
            { id: '1', name: 'iPhone' },
            { id: '2', name: 'Samsung' },
        ]
        const result = removeDuplicates(items, 'id')
        expect(result).toHaveLength(2)
    })

    it('should return empty array if items is empty', () => {
        const result = removeDuplicates([], 'id')
        expect(result).toHaveLength(0)
    })

    it('should keep the last occurrence of a duplicate', () => {
        const items = [
            { id: '1', name: 'iPhone 14' },
            { id: '1', name: 'iPhone 15' },
        ]
        const result = removeDuplicates(items, 'id')
        expect(result[0].name).toBe('iPhone 15')
    })
})
