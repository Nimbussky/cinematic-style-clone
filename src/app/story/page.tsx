import Link from "next/link"

export const metadata = {
  title: "Our Story | Organic Garlic Premium",
  description: "How a family farm in the Himalayas grows premium organic garlic.",
}

export default function StoryPage() {
  return (
    <div className="pt-24 bg-[#FAFAF6]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-20">
        <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
        <h1 className="text-4xl md:text-6xl font-light text-[#1A1A2E] tracking-tight mb-12">
          Nature&apos;s<br /><span className="italic text-[#C9A84C]">Finest</span> Garlic
        </h1>
        <section className="mb-16">
          <h2 className="text-2xl font-light text-[#1A1A2E] mb-4">The Beginning</h2>
          <p className="text-[#5A5A6E] leading-relaxed">
            Nestled in the pristine valleys of Himachal Pradesh, our family farm began with a simple belief:
            garlic should grow as nature intended. Generations of farming wisdom combined with pure mountain
            air created the perfect environment for premium organic garlic.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-light text-[#1A1A2E] mb-4">The Craft</h2>
          <p className="text-[#5A5A6E] leading-relaxed">
            Every bulb is hand-selected at peak flavor. Natural curing preserves essential oils and pungency.
            From silky peeled garlic to 60-day fermented black garlic — every product is crafted with care.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-light text-[#1A1A2E] mb-4">The Promise</h2>
          <p className="text-[#5A5A6E] leading-relaxed">
            Farm-to-home within days. No unnecessary middlemen. Transparency, integrity, and garlic that
            tastes the way nature meant it to.
          </p>
        </section>
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-[#C9A84C] text-[#1A1A2E] rounded-2xl font-medium hover:bg-[#D4B85A] transition-all"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
