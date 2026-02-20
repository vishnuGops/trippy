import { Hero } from "@/components/layout/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Placeholder Sections for Navigation Scrolling */}
      <section id="features" className="min-h-screen flex items-center justify-center relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white/10 tracking-widest">FEATURES</h2>
          <p className="text-white/40">Coming Soon</p>
        </div>
      </section>
      
      <section id="destinations" className="min-h-screen flex items-center justify-center relative z-10 border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white/10 tracking-widest">DESTINATIONS</h2>
          <p className="text-white/40">Explore the World</p>
        </div>
      </section>
      
      <section id="pricing" className="min-h-screen flex items-center justify-center relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white/10 tracking-widest">PRICING</h2>
          <p className="text-white/40">Flexible Plans</p>
        </div>
      </section>
      
      <section id="about" className="min-h-screen flex items-center justify-center relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white/10 tracking-widest">ABOUT</h2>
          <p className="text-white/40">Our Story</p>
        </div>
      </section>
    </div>
  );
}
