"use client"

import Link from "next/link"
import { useCart } from "@/store/cart"
import { formatPrice } from "@/lib/utils"
import { Badge, Button, ProductCard, ProductImage } from "@/components/ui"
import { products } from "@/lib/data"

export function ProductsPageContent() {
  const { addItem } = useCart()

  return (
    <div className="pt-24 min-h-screen bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-4">Collection</p>
          <h1 className="text-4xl md:text-6xl font-light text-[#1A1A2E] tracking-tight">All Products</h1>
          <p className="mt-4 text-lg text-[#5A5A6E] font-light">Premium organic garlic, farm-fresh from Himachal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id}>
              <Link href={`/products/${product.slug}`}>
                <div className="aspect-square bg-[#F5F0E8] overflow-hidden">
                  <ProductImage
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="text-lg font-medium text-[#1A1A2E] group-hover:text-[#C9A84C] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#5A5A6E] mt-1">{product.unit}</p>
                  </div>
                  <Badge variant="organic">Organic</Badge>
                </div>
                <p className="text-sm text-[#9A9AAE] mt-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-light text-[#1A1A2E]">{formatPrice(product.price)}</span>
                  <Button size="sm" onClick={() => addItem(product)}>Add to Cart</Button>
                </div>
              </div>
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  )
}
