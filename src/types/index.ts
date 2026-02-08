export interface Mobile {
    id: string
    brand: string
    name: string
    basePrice: number
    imageUrl: string
}

export interface MobileDetails {
    id: string
    brand: string
    name: string
    description: string
    basePrice: number
    rating: number
    specs: Specs
    colorOption: ColorOption[]
    storageOptions: StorageOption[]
    similarProducts: Mobile[]
}

interface Specs {
    screen: string
    resolution: string,
    processor: string,
    mainCamera: string,
    selfieCamera: string,
    battery: string,
    os: string,
    screenRefreshRate: string
}

interface ColorOption {
    name: string,
    hexCode: string,
    imageUrl: string
}

interface StorageOption {
    capacity: string,
    price: number
}