import { Cloud, Waves, Mountain } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const packages = [
  {
    icon: Cloud,
    name: 'Sky',
    subtitle: 'Caelum',
    tagline: 'For the traveler who needs a flight plan and a little lift.',
    description: 'A beautifully structured itinerary designed around your style and interests. Perfect if you want expert guidance and recommendations while keeping bookings in your own hands.',
    features: [
      'Personalized 3-10 day itinerary',
      'Destination research & route mapping',
      'Curated stays + hand-picked dining & activities',
      'Destination-specific packing guide & insider tips',
      'Day-by-day itinerary in mobile-friendly PDF',
    ],
    price: 'Contact for pricing',
    image: 'https://static.wixstatic.com/media/e15d6a2f66f15513b540c57e79b63b4e.jpg/v1/fill/w_1280,h_639,al_c,q_85,enc_avif,quality_auto/e15d6a2f66f15513b540c57e79b63b4e.jpg',
  },
  {
    icon: Waves,
    name: 'Sea',
    subtitle: 'Mare',
    tagline: 'For the traveler who wants to go deeper, with support that flows effortlessly.',
    description: 'This offer will handle the details that bring your itinerary to life while still leaving room for you to choose your own adventure.',
    features: [
      'Everything in the Caelum package',
      'Up to 10 key bookings arranged on your behalf',
      'Customized daily maps with pinned locations',
      'Transportation coordination',
      'Concierge support during your travels',
    ],
    price: 'Contact for pricing',
    image: 'https://static.wixstatic.com/media/0d1451d2af02464fad0a2e2d83cca960.jpg/v1/fill/w_1860,h_886,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d1451d2af02464fad0a2e2d83cca960.jpg',
  },
  {
    icon: Mountain,
    name: 'Land',
    subtitle: 'Terra',
    tagline: 'For those who want it all — grounded in care, elevated in detail.',
    description: 'Every element of your journey is expertly handled with creativity, precision, and white-glove service from start to finish.',
    features: [
      'Everything in the Mare package',
      'Unlimited bookings & tailored logistics',
      'Access to private & exclusive experiences',
      'Real-time updates & full itinerary management',
      'WhatsApp concierge access while traveling',
      'Personalized surprise moments & special touches',
      'VIP pre-trip gift from the Caelmarra team',
    ],
    price: 'Contact for pricing',
    image: 'https://static.wixstatic.com/media/11062b_5ef837df73d9453fa7c07d9d82a8355a~mv2.jpg/v1/fill/w_1860,h_1069,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_5ef837df73d9453fa7c07d9d82a8355a~mv2.jpg',
  },
];

export default function Packages() {
  const { ref, isInView } = useInView();

  return (
    <section id="packages" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light text-center mb-6 tracking-wide">
            Our Packages
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"></div>
          <p className="text-center text-2xl font-light italic text-gray-700 mb-20">
            The World Within Reach
          </p>

          <div className="space-y-20">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div
                  className={`${index % 2 === 1 ? 'md:col-start-2' : ''} transition-all duration-1000 ${
                    isInView ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <pkg.icon size={48} className="mb-2" />
                      <p className="text-sm tracking-widest uppercase mb-1">{pkg.name}</p>
                      <h3 className="text-5xl font-light">{pkg.subtitle}</h3>
                    </div>
                  </div>
                </div>

                <div
                  className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''} transition-all duration-1000 ${
                    isInView ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 translate-x-20' : 'opacity-0 -translate-x-20'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <p className="text-lg font-semibold mb-4 text-gray-800">{pkg.tagline}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold text-gray-900">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 italic mb-8">
              Custom quotes available for longer trips, hosted travel, or larger groups.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Choose Your Adventure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
