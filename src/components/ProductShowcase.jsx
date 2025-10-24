import React from 'react'

const products = [
  {
    id: 'bone-bites',
    emoji: '🦴',
    name: 'Crunchy Bone Bites',
    desc: 'Peanut butter, oats, flax',
    price: '$12',
    color: 'from-rose-50 to-white'
  },
  {
    id: 'salmon-nibbles',
    emoji: '🐟',
    name: 'Salmon Nibbles',
    desc: 'Wild-caught salmon, sweet potato',
    price: '$14',
    color: 'from-sky-50 to-white'
  },
  {
    id: 'apple-squares',
    emoji: '🍎',
    name: 'Apple Chew Squares',
    desc: 'Apples, chia, cinnamon',
    price: '$10',
    color: 'from-emerald-50 to-white'
  },
  {
    id: 'carrot-crunch',
    emoji: '🥕',
    name: 'Carrot Crunch',
    desc: 'Carrot, pumpkin, turmeric',
    price: '$11',
    color: 'from-amber-50 to-white'
  }
]

export default function ProductShowcase() {
  return (
    <section id="treats" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our best‑selling treats</h2>
            <p className="mt-2 text-slate-600">Small-batch baked weekly for peak freshness and crunch.</p>
          </div>
          <a href="#" className="inline-flex self-start sm:self-auto rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-slate-300 bg-white hover:bg-slate-50 transition">
            View all snacks
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className={`group rounded-2xl bg-gradient-to-br ${p.color} ring-1 ring-slate-200 shadow-sm p-5 flex flex-col`}> 
              <div className="flex items-start justify-between">
                <div className="text-5xl drop-shadow-sm">{p.emoji}</div>
                <span className="text-xs font-medium bg-white/70 px-2 py-0.5 rounded-full ring-1 ring-slate-200">{p.price}</span>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg leading-tight">{p.name}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-full bg-rose-600 text-white text-sm font-semibold py-2.5 hover:bg-rose-700 active:scale-[.99] transition">Add to cart</button>
                <button className="w-10 rounded-full ring-1 ring-slate-300 bg-white hover:bg-slate-50 transition" aria-label="Favorite">🫶</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white ring-1 ring-slate-200 p-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold">Bundle & save 15%</p>
            <p className="text-sm text-slate-600">Pick any 3 snack packs and get free shipping at checkout.</p>
          </div>
          <a href="#" className="rounded-full px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 active:scale-[.99] transition">Build your bundle</a>
        </div>
      </div>
    </section>
  )
}
