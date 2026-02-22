import { MobileDetailsApi } from '@/types'

export function removeDuplicates<T>(items: T[], key: keyof T): T[] {
  return Array.from(new Map(items.map((item) => [item[key], item])).values())
}

export function buildSpecs(item: MobileDetailsApi): { name: string; value: string }[] {
  return [
    { name: 'Brand', value: item.brand },
    { name: 'Model', value: item.name },
    { name: 'Description', value: item.description },
    { name: 'Screen', value: item.specs.screen },
    { name: 'Resolution', value: item.specs.resolution },
    { name: 'Processor', value: item.specs.processor },
    { name: 'Main Camera', value: item.specs.mainCamera },
    { name: 'Selfie Camera', value: item.specs.selfieCamera },
    { name: 'Battery', value: item.specs.battery },
    { name: 'OS', value: item.specs.os },
    { name: 'Refresh Rate', value: item.specs.screenRefreshRate },
  ]
}
