import { Button } from "@/components/ui/button"

export default function MyTrips() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 px-6 text-center">
      <div className="glass-card p-12 max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
          My Trips
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          View your upcoming and past adventures here.
        </p>
        <div className="flex justify-center gap-4">
            <Button variant="glass" size="lg">
              View Upcoming
            </Button>
            <Button variant="outline" size="lg">
              History
            </Button>
        </div>
      </div>
    </div>
  )
}
