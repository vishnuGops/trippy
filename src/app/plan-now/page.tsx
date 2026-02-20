import { Button } from "@/components/ui/button"

export default function PlanNow() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 text-center">
        <div className="glass-card p-12 max-w-4xl w-full flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Plan Your Journey
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Start creating your perfect itinerary. Use our AI-powered planner to get started.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left">
                    <h3 className="text-xl font-bold mb-2 text-emerald-300">Start from Scratch</h3>
                    <p className="text-sm text-slate-400">Build your itinerary manually, step by step.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left">
                    <h3 className="text-xl font-bold mb-2 text-cyan-300">AI Assistant</h3>
                    <p className="text-sm text-slate-400">Let our AI generate a personalized plan for you.</p>
                </div>
            </div>
            <div className="mt-8">
                <Button variant="glass" size="lg" className="px-12">
                    Create New Trip
                </Button>
            </div>
        </div>
    </div>
  )
}
