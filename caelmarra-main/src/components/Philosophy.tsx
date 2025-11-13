import { Compass, Sparkles, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Compass,
    title: 'Expert Guidance',
    description: 'Years of luxury hospitality experience combined with personal passion for meaningful travel.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Journeys',
    description: 'Every itinerary is crafted with meticulous attention to detail and personalized touches for the ultimate travel experience.',
  },
  {
    icon: Heart,
    title: 'Concierge Care',
    description: 'From planning to execution, we handle every detail with white-glove service and genuine care.',
  },
];

export default function Philosophy() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-center mb-6 tracking-wide">
            Why Choose Caelmarra
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg"
            >
              Experience the Difference
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
