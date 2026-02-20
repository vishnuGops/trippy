"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Hyperspeed, { hyperspeedPresets } from "@/components/ui/Hyperspeed";
import { joinWaitlist } from "@/app/actions/waitlist";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="glass"
      size="lg"
      disabled={pending}
      className="h-12 px-8 rounded-full text-base min-w-[160px] shadow-[0_0_20px_rgba(6,182,212,0.3)] border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:bg-cyan-500/10 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Joining..." : "Join Waitlist"}
    </Button>
  );
}

export function Hero() {
  const [state, formAction] = useActionState(joinWaitlist, null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
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

          <div className="pt-10 w-full max-w-md mx-auto">
            <form action={formAction} className="flex flex-col sm:flex-row items-center gap-4">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-cyan-500/50 rounded-full px-6"
              />
              <SubmitButton />
            </form>
            
            {state?.error && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 mt-4 text-sm font-medium"
              >
                {state.error}
              </motion.p>
            )}
            
            {state?.success && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 mt-4 text-sm font-medium"
              >
                {state.success}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
