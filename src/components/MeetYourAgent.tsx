import { MapPin, Award, Globe } from 'lucide-react';

export default function MeetYourAgent() {
  return (
    <section id="meet-agent" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-6 text-gray-900 animate-fadeIn">
          Meet Your Travel Curator
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Column */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-slideInLeft">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ maxHeight: '600px' }}
            >
              <source src="/videos/kayleigh-profile-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Content Column */}
          <div className="space-y-8 animate-slideInRight">
            <div>
              <h3 className="text-3xl font-light mb-2 text-gray-900">Kayleigh Kovacic</h3>
              <p className="text-lg text-gray-600 italic">Your Personal Luxury Travel Architect</p>
            </div>
            
            <div className="prose prose-lg text-gray-700">
              <p className="leading-relaxed">
                With an illustrious career spanning the world's most prestigious hospitality brands, 
                Kayleigh brings an unparalleled depth of expertise to curating your perfect journey.
                Her tenure with legendary establishments like the Four Seasons has refined her ability
                to anticipate and exceed the expectations of travelers who appreciate the finest experiences.
              </p>
              
              <br></br>
              
              <p className="leading-relaxed">
                As a former private concierge to elite clientele, Kayleigh has mastered the art of 
                transforming travel dreams into seamless realities. Her insider knowledge, cultivated 
                through years of exclusive access and relationships, ensures that every detail of your 
                journey is meticulously crafted to perfection.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>Based in Denver, Colorado</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <Globe className="w-5 h-5 text-gray-400" />
                <span>Originally from Oak Park, California</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <Award className="w-5 h-5 text-gray-400" />
                <span>Luxury Hospitality & Private Concierge Specialist</span>
              </div>
            </div>
            
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}