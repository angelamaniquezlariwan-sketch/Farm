import { ChevronDown, Heart, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full border border-emerald-200 mb-5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Locally raised · Fresh · Trusted since 2012
            </span>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-dark-green">
              Good Chickens.
              <span className="block text-emerald-700">Easy Ordering.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-dark-green/80 max-w-xl leading-relaxed">
              Your next flock is just a few clicks away! Choose your preferred chickens,
              calculate your budget, and prepare your reservation message with ease.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#quick-order"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quick-order')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-6 py-3.5 rounded-full shadow-soft transition transform hover:-translate-y-0.5"
              >
                Start My Order
              </a>
              <a
                href="#care-guide"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('care-guide')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand-100 text-emerald-800 font-semibold px-6 py-3.5 rounded-full border-2 border-emerald-800 transition transform hover:-translate-y-0.5"
              >
                Explore Care Tips
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-dark-green/70">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                  ₱
                </div>
                <span>Clear, upfront price ranges</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Heart className="w-4 h-4" fill="currentColor" />
                </div>
                <span>Hand-picked, healthy birds</span>
              </div>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-100 to-amber-50 shadow-soft" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-white shadow-card flex items-center justify-center rotate-6">
                <span className="text-4xl">🐔</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-white shadow-card flex items-center justify-center -rotate-6">
                <span className="text-4xl">🥚</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-emerald-800/90 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="font-serif font-bold text-3xl">1,000+</div>
                  <div className="text-xs uppercase tracking-wide text-emerald-100">
                    Happy Flocks
                  </div>
                </div>
              </div>
              <div className="absolute top-10 right-8 bg-white rounded-xl shadow-card px-3 py-2 text-xs font-medium text-dark-green flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                Farm-fresh daily
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Free-range options', icon: '🌿' },
            { label: 'Same-day pickup', icon: '🚚' },
            { label: 'Bulk discounts', icon: '📦' },
            { label: 'Care support', icon: '📖' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/70 backdrop-blur rounded-xl border border-emerald-100 px-4 py-3 text-center text-sm font-medium text-dark-green/80"
            >
              <span className="mr-1.5">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#quick-order"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quick-order')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-xs text-emerald-700 hover:text-emerald-900"
          >
            <span>Jump to the order calculator</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}