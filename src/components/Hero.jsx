import React from 'react'
import { PawPrint, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)] bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(244,63,94,0.09),transparent),radial-gradient(800px_300px_at_80%_10%,rgba(251,191,36,0.10),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 sm:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">
              <Star className="h-3.5 w-3.5 text-amber-500" /> Vet-approved recipes
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Wholesome snacks for tails that never stop wagging
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Crafted with human‑grade ingredients, irresistible crunch, and zero junk. Perfect for training, rewarding, and everyday zoomies.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#treats" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 active:scale-[.99] transition">
                <PawPrint className="h-5 w-5" /> Shop Best Sellers
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold ring-1 ring-slate-300 bg-white/70 hover:bg-white transition">Why Nibble & Wag</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500" /> 4.9/5 by 2,100+ pet parents
              </div>
              <div className="flex items-center gap-1">
                <PawPrint className="h-4 w-4 text-rose-500" /> Made in small batches
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-rose-200 via-amber-200 to-white blur-2xl opacity-70" />
              <div className="rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
                <div className="aspect-[4/3] grid grid-cols-2">
                  <div className="relative p-6 flex flex-col justify-between bg-gradient-to-br from-rose-50 to-white">
                    <div className="text-6xl">🦴</div>
                    <div>
                      <p className="font-semibold">Crunchy Bone Bites</p>
                      <p className="text-sm text-slate-600">Peanut butter + flax</p>
                    </div>
                  </div>
                  <div className="relative p-6 flex flex-col justify-between bg-gradient-to-br from-amber-50 to-white border-l">
                    <div className="text-6xl">🐟</div>
                    <div>
                      <p className="font-semibold">Salmon Nibbles</p>
                      <p className="text-sm text-slate-600">Omega-rich & shiny coats</p>
                    </div>
                  </div>
                  <div className="relative p-6 flex flex-col justify-between bg-gradient-to-br from-emerald-50 to-white border-t">
                    <div className="text-6xl">🍎</div>
                    <div>
                      <p className="font-semibold">Apple Chew Squares</p>
                      <p className="text-sm text-slate-600">No added sugar</p>
                    </div>
                  </div>
                  <div className="relative p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-50 to-white border-t border-l">
                    <div className="text-6xl">🥕</div>
                    <div>
                      <p className="font-semibold">Carrot Crunch</p>
                      <p className="text-sm text-slate-600">Beta-carotene boost</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
