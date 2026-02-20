'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
        <motion.nav
          className={cn(
            "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
            isScrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_10px_rgba(79,70,229,0.2)]"
              : "bg-white/5 backdrop-blur-md border border-white/5 shadow-[0_0_20px_0_rgba(255,255,255,0.05)]"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "min(90%, 900px)" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tighter text-white"
          >
            Trippy
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white hover:scale-105 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="glass" size="sm" className="rounded-full h-9 px-5 glow-on-hover">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-0 right-0 z-40 px-4 pointer-events-none flex justify-center"
          >
            <div 
              className="pointer-events-auto w-[min(90%,900px)] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-6 items-center text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-white/80 hover:text-white transition-colors w-full py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="glass" size="lg" className="w-full rounded-full mt-2">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
