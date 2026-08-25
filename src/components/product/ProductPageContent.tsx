"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { useCart } from "@/store/cart"
import { formatPrice } from "@/lib/utils"
import { Badge, Button, ProductImage } from "@/components/ui"
import { products, getRelatedProducts, getProductReviews } from "@/lib/data"
import { useState } from "react"

export function ProductPageContent({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) notFound()

  const related = getRelatedProducts(product.id)
  const reviews = getProductReviews(product.id)

  return (
    <div className="pt-24 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="aspect-square bg-[#F5F0E8] rounded-3xl overflow-hidden">
            <ProductImage src={product.images[0]} alt={product.name} className="w-full h-full" priority />
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="organic">100% Organic</Badge>
                <Badge>{product.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-[#1A1A2E] tracking-tight">{product.name}</h1>
              <p className="text-[#5A5A6E] mt-2">{product.unit}</p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light text-[#1A1A2E]">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="text-lg text-[#9A9AAE] line-through">{formatPrice(product.comparePrice)}</span>
              )}
            </div>
            <p className="text-[#5A5A6E] leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[#E8E4DC] rounded-2xl">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-12 h-12 flex items-center justify-center text-[#5A5A6E]">-</button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center text-[#5A5A6E]">+</button>
              </div>
              <Button size="lg" className="flex-1" onClick={() => addItem(product, quantity)}>
                Add to Cart - {formatPrice(product.price * quantity)}
              </Button>
            </div>
            <div className="border-t border-[#E8E4DC] pt-6">
              <h3 className="text-sm font-medium text-[#1A1A2E] mb-3 uppercase tracking-wider">Benefits</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.benefits.map((b) => (
                  <li key={b} className="text-sm text-[#5A5A6E] flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {reviews.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-light text-[#1A1A2E] mb-8">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white p-6 rounded-2xl border border-[#E8E4DC]">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < r.rating ? "text-[#C9A84C]" : "text-[#E8E4DC]"}>★</span>
                    ))}
                  </div>
                  <p className="text-[#5A5A6E] text-sm mb-4">&ldquo;{r.comment}&rdquo;</p>
                  <p className="text-xs text-[#9A9AAE]">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-light text-[#1A1A2E] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id}>
                  <Link href={`/products/${p.slug}`}>
                    <div className="aspect-square bg-[#F5F0E8] overflow-hidden">
                      <ProductImage src={p.images[0]} alt={p.name} className="w-full h-full" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-[#1A1A2E]">{p.name}</h3>
                      <p className="text-[#C9A84C] text-sm mt-1">{formatPrice(p.price)}</p>
                    </div>
                  </Link>
                </ProductCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
