export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 md:pl-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/caelmarra-logo.png"
              alt="Caelmarra Concierge"
              className="h-24 w-auto mb-4 object-contain brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Luxury travel experiences crafted with precision and care. Where Sky, Sea, and Earth converge.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Kayleigh Kovacic</p>
              <p>caelmarraconcierge@gmail.com</p>
              <p className="text-sm pt-2">Denver, Colorado</p>
              <p className="text-xs">Available Mon-Fri 9AM-6PM MST</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Accessibility Statement
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Caelmarra Concierge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
