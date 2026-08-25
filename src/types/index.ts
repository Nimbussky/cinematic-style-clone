export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  comparePrice?: number
  unit: string
  images: string[]
  category: string
  tags: string[]
  nutrition: NutritionInfo
  benefits: string[]
  storage: string
  inStock: boolean
  weight: string
  origin: string
  seo?: { title: string; description: string }
}

export interface NutritionInfo {
  calories: number
  fat: number
  carbs: number
  protein: number
  fiber: number
  vitaminC: number
  manganese: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Review {
  id: string
  productId: string
  name: string
  rating: number
  comment: string
  date: string
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
}
