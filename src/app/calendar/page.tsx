import { Button } from "@/components/ui/button"

export default function Calendar() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 text-center">
      <div className="glass-card p-12 max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
          Calendar
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Manage your travel schedule and upcoming events.
        </p>
        <div className="grid grid-cols-7 gap-2 max-w-2xl mx-auto mt-8">
            {/* Simple Grid Placeholder for a Calendar */}
            {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className="aspect-square flex items-center justify-center border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer text-slate-400 text-sm">
                    {i + 1}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
