import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light text-center mb-6 tracking-wide">
            Our Story
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Caelmarra Concierge is a luxury travel advisory dedicated to crafting experiences for curious,
                inspired travelers who want the world within reach.
              </p>
              <p>
                Rooted in the Latin words for sky (caelum), sea (mare), and land (terra), Caelmarra creates
                fully customized itineraries that are grounded in detail, elevated in design, and guided by experience.
              </p>
              <p>
                Whether you're exploring timeless city streets, chasing sunsets on the water, or soaring to
                skies that beckon beyond, we arrange every trip with concierge-level precision — so you can
                simply show up and enjoy the journey.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
              <img
                src="https://static.wixstatic.com/media/11062b_fde553897dbd43d6a95f3dbfbe3c730b~mv2.jpeg/v1/fill/w_897,h_499,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fde553897dbd43d6a95f3dbfbe3c730b~mv2.jpeg"
                alt="Resort Pool Top View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl md:text-3xl font-light italic text-gray-800 max-w-3xl mx-auto mb-8">
              "At Caelmarra, every traveler deserves a journey that feels like it was made only for them."
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
