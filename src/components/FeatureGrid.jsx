import React from 'react'
import { Leaf, Truck, Check, Heart } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    desc: 'No corn, wheat, soy, or artificial junk. Just real, pronounceable foods.'
  },
  {
    icon: Truck,
    title: 'Fast, Fresh Delivery',
    desc: 'Shipped in eco‑friendly packs. Free shipping over $35.'
  },
  {
    icon: Check,
    title: 'Vet Approved',
    desc: 'Balanced recipes formulated with veterinary nutritionists.'
  },
  {
    icon: Heart,
    title: 'Pets Love It',
    desc: 'Tail-thumping flavors tested by picky eaters and gentle on tummies.'
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Good for pets, easy for you</h2>
          <p className="mt-3 text-slate-600">Everything we bake is made like you would at home—if you had a commercial kitchen and unlimited time.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-rose-500/10 text-rose-600 grid place-items-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
