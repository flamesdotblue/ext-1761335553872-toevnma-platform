import React from 'react'
import { Star, PawPrint } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Rex & Maya',
    text: 'The only treats our anxious shepherd will work for. Ingredients I recognize and a crunch he loves!',
    rating: 5
  },
  {
    id: 2,
    name: 'Pumpkin the Cat',
    text: 'Salmon Nibbles turned our picky queen into a purr machine. Zero tummy issues!',
    rating: 5
  },
  {
    id: 3,
    name: 'Buddy the Beagle',
    text: 'Training sessions are a breeze now. Small pieces, big motivation.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="love" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by pets and their people</h2>
          <p className="mt-3 text-slate-600">Real stories from the Nibble & Wag community.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.id} className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{r.text}”</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <PawPrint className="h-4 w-4 text-rose-500" />
                <span className="font-medium">{r.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <a href="#treats" className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 active:scale-[.99] transition">
            <PawPrint className="h-5 w-5" /> Treat your best friend today
          </a>
          <p className="mt-2 text-xs text-slate-500">30-day happiness guarantee or your money back.</p>
        </div>
      </div>
    </section>
  )
}
