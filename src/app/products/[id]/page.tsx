import type { Metadata } from "next"
import { ProductPageContent } from "@/components/product/ProductPageContent"
import { getProductBySlug } from "@/lib/data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product) return { title: "Product not found" }
  return {
    title: product.seo?.title ?? `${product.name} | Organic Garlic Premium`,
    description: product.seo?.description ?? product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }>) {
  const { id } = await params
  return <ProductPageContent slug={id} />
}
