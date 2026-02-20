"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[90px] mix-blend-screen"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-cyan-300 tracking-wider uppercase">
              Beta Access Loading...
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-sm">
            Plan your next adventure <br />
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              AI precision.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300/80 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the future of travel planning. Minimalist, intuitive, and
            intelligently crafted for the modern explorer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Button
              variant="glass"
              size="lg"
              className="h-14 px-10 rounded-full text-lg min-w-[200px] shadow-[0_0_20px_rgba(6,182,212,0.3)] border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:bg-cyan-500/10 transition-all duration-500"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 rounded-full text-lg min-w-[200px] border-white/10 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
    </section>
  );
}
