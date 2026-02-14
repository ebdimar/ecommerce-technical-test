'use server';

import { searchItems } from './api';
import { Mobile } from '@/types';

export async function searchMobiles(query: string): Promise<Mobile[]> {
    if (!query.trim()) {
        return [];
    }

    try {
        return await searchItems<Mobile[]>(query);
    } catch (error) {
        console.error('Search action error:', error);
        return [];
    }
}