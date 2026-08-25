"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/store/cart"
import { formatPrice } from "@/lib/utils"
import { Badge, Button, ProductCard, ProductImage } from "@/components/ui"
import { products } from "@/lib/data"
import type { Product } from "@/types"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Homepage() {
  const { addItem } = useCart()

  return (
    <>
      <HeroSection />
      <FeaturedProducts onAdd={addItem} />
      <WhyChooseUs />
      <CinematicStory />
      <CustomerReviews />
      <NewsletterSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A2E]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/80 via-[#1A1A2E]/50 to-[#1A1A2E]/90 z-10" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 z-0">
        <span className="text-[20rem] select-none animate-float">🧄</span>
      </div>
      <motion.div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.p variants={fadeUp} className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-6">
          Cinematic Premium Experience
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-light text-white tracking-tight leading-none mb-6">
          Nature&apos;s
          <br />
          <span className="italic text-[#C9A84C]">Finest</span> Garlic
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10">
          Hand-selected, organically grown, and delivered fresh from the pristine valleys of Himachal Pradesh.
        </motion.p>
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/products"
            className="px-8 py-4 bg-[#C9A84C] text-[#1A1A2E] rounded-2xl font-medium hover:bg-[#D4B85A] transition-all hover:scale-[1.02]"
          >
            Explore Collection
          </Link>
          <Link
            href="/story"
            className="px-8 py-4 border border-white/20 text-white rounded-2xl font-medium hover:bg-white/5 transition-all"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts({ onAdd }: { onAdd: (product: Product) => void }) {
  return (
    <section className="py-28 px-4 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-4">Collection</p>
          <h2 className="text-4xl md:text-6xl font-light text-[#1A1A2E] tracking-tight">Premium Selection</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
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
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-light text-[#1A1A2E]">{formatPrice(product.price)}</span>
                  <Button size="sm" onClick={() => onAdd(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    { icon: "🌱", title: "100% Certified Organic", desc: "Grown without pesticides or GMOs" },
    { icon: "⛰️", title: "Himalayan Grown", desc: "Pristine mountain soil and pure spring water" },
    { icon: "🚚", title: "Farm to Door in 24hr", desc: "Harvested and delivered at peak freshness" },
    { icon: "✨", title: "Hand-Selected", desc: "Every clove inspected for premium quality" },
  ]

  return (
    <section className="py-28 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1A1A2E]">Crafted with Care</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{reason.icon}</div>
              <h3 className="text-lg font-medium text-[#1A1A2E] mb-3">{reason.title}</h3>
              <p className="text-sm text-[#5A5A6E] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CinematicStory() {
  return (
    <section className="py-32 px-4 bg-[#1A1A2E] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-6">The Journey</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
          From Himalayan Soil
          <br />
          <span className="italic text-[#C9A84C]">to Your Table</span>
        </h2>
        <p className="text-lg text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Every bulb is hand-selected at peak ripeness, naturally cured, and delivered within days.
          A cinematic farm-to-home experience rooted in purity and craft.
        </p>
        <Link
          href="/story"
          className="inline-block px-8 py-4 border border-[#C9A84C]/40 text-[#C9A84C] rounded-2xl font-medium hover:bg-[#C9A84C]/10 transition-all"
        >
          Watch the Story
        </Link>
      </div>
    </section>
  )
}

function CustomerReviews() {
  const featured = [
    { name: "Priya S.", text: "Absolutely the best garlic I've ever bought. Incredibly fresh and intense!", rating: 5 },
    { name: "Rahul M.", text: "Premium quality, amazing aroma. The peeled garlic saves so much time.", rating: 5 },
    { name: "Anita K.", text: "Black garlic is a revelation! Sweet, complex, and delicious.", rating: 5 },
  ]

  return (
    <section className="py-28 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1A1A2E]">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((review) => (
            <div key={review.name} className="bg-white p-8 rounded-3xl border border-[#E8E4DC]">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < review.rating ? "text-[#C9A84C]" : "text-[#E8E4DC]"}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[#5A5A6E] leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
              <p className="text-sm font-medium text-[#1A1A2E]">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="py-28 px-4 bg-[#1A1A2E]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#C9A84C] text-sm tracking-[0.2em] uppercase mb-4">Stay Connected</p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Join the Premium Circle</h2>
        <p className="text-white/50 mb-8">Subscribe for exclusive offers and farm updates.</p>
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
          <button className="px-6 py-4 bg-[#C9A84C] text-[#1A1A2E] rounded-2xl font-medium hover:bg-[#D4B85A] transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
