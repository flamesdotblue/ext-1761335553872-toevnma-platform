import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-800">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/60 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-rose-500/10 grid place-items-center">
              <span className="text-2xl">🐾</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Nibble & Wag</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-rose-600 transition-colors">Why Us</a>
            <a href="#treats" className="hover:text-rose-600 transition-colors">Snacks</a>
            <a href="#love" className="hover:text-rose-600 transition-colors">Love</a>
          </nav>
          <a href="#treats" className="px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 active:scale-[.99] transition-all shadow-sm">Shop Treats</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <FeatureGrid />
        <ProductShowcase />
        <Testimonials />
      </main>

      <footer className="border-t mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-rose-500/10 grid place-items-center">
              <span className="text-lg">🐶</span>
            </div>
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Nibble & Wag. All rights reserved.</p>
          </div>
          <div className="text-sm text-slate-500">Made with love for cats, dogs, and humans who spoil them.</div>
        </div>
      </footer>
    </div>
  )
}
