import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute object-cover"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) scale(1.2)',
            width: '120%',
            height: '120%',
            minWidth: '120%',
            minHeight: '120%',
            // HD Enhancement Filters - increased brightness
            filter: 'contrast(1.0) saturate(1.2) brightness(1.05)',
            // Sharpen effect using CSS
            imageRendering: 'crisp-edges',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            // Force GPU acceleration
            willChange: 'transform',
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Lighter gradient overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        {/* Additional subtle vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 animate-fadeInUp">
        <img
          src="/images/caelmarra-logo.png"
          alt="Caelmarra Logo"
          className="h-56 md:h-72 lg:h-80 w-auto mx-auto mb-8 object-contain brightness-0 invert animate-fadeIn"
        />
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 animate-expandWidth"></div>
        <p className="text-xl md:text-3xl font-light tracking-wide mb-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Luxury Travel Redefined
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed animate-fadeInUp mb-8" style={{ animationDelay: '0.6s' }}>
          Where Sky, Sea, and Earth converge to create extraordinary journeys
        </p>
        <a
          href="#contact"
          className="inline-block bg-transparent text-white px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium animate-fadeInUp"
          style={{ animationDelay: '0.9s' }}
        >
          Begin Your Escape
        </a>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}

