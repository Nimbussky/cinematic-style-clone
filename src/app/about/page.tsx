export const metadata = {
  title: "About | Organic Garlic Premium",
  description: "About Organic Garlic Premium — Himalayan organic garlic.",
}

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#FAFAF6]">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-20">
        <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
        <h1 className="text-4xl md:text-5xl font-light text-[#1A1A2E] tracking-tight mb-8">
          Premium Organic, From the Himalayas
        </h1>
        <p className="text-[#5A5A6E] leading-relaxed mb-6">
          Organic Garlic Premium is a farm-to-door brand rooted in Himachal Pradesh. We grow, select,
          and deliver organic garlic products with a focus on purity, freshness, and craft.
        </p>
        <p className="text-[#5A5A6E] leading-relaxed">
          Our collection includes peeled garlic, whole bulbs, fermented black garlic, powder,
          infused oil, and traditional chutney — all organically grown and carefully processed.
        </p>
      </div>
    </div>
  )
}
