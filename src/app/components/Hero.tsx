
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export function Hero({ title, subtitle, ctaText }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/60 to-emerald-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="mb-8 flex justify-center">
          <div className="bg-emerald-500/20 p-6 rounded-full backdrop-blur-sm">
            <img src="/src/imports/Untitled design (3).png" alt="Logo" className="w-16 h-16" />
          </div>
        </div>
        <h1 className="mb-6 text-white text-5xl md:text-6xl">Renmant</h1>
        <p className="text-emerald-100 text-xl md:text-2xl mb-12 leading-relaxed">
          {subtitle}
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl">
          {ctaText}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-300 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
