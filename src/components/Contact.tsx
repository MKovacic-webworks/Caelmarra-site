
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS (only if credentials are configured)
  if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: 'caelmarraconcierge@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not provided',
        experience: formData.experience,
        message: formData.message || 'No additional message',
      };

      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
          EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
          EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        
        // Send email using EmailJS
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams
        );
      } else {
        // Fallback to mailto if EmailJS is not configured
        const mailtoLink = `mailto:caelmarraconcierge@gmail.com?subject=New Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company || 'N/A'}\n\nTravel Experience Desired:\n${formData.experience}\n\nAdditional Message:\n${formData.message || 'None'}`
        )}`;
        
        window.location.href = mailtoLink;
      }
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        experience: '',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light text-center mb-6 tracking-wide">
            Let's Create Your Journey
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-center text-xl font-light mb-16 text-gray-300 max-w-3xl mx-auto">
            Every extraordinary journey begins with a conversation. Share your vision and let us craft an experience that exceeds your expectations.
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - Enhanced */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-light mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              
              <div className="space-y-6 mb-12">
                <div className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg">Email</p>
                    <a
                      href="mailto:caelmarraconcierge@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors text-lg break-all"
                    >
                      caelmarraconcierge@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg">Location</p>
                    <p className="text-gray-300 text-lg">Denver, Colorado</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-lg">Availability</p>
                    <p className="text-gray-300 text-lg">Mon-Fri 9AM-6PM MST</p>
                  </div>
                </div>
              </div>

              {/* Consultation Box - Enhanced */}
              <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <h4 className="text-xl font-light">Complimentary Consultation</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Every journey starts with a vision. We offer a complimentary consultation call to
                  learn about your travel style, preferences, and goals. Let's discuss what inspires
                  your upcoming trip and explore which package best fits your needs.
                </p>
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder-gray-400"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder-gray-400"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="group">
                <label htmlFor="company" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 placeholder-gray-400"
                  placeholder="Your Company"
                />
              </div>

              <div className="group">
                <label htmlFor="experience" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                  What travel experience are you looking for? *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Tell us about your dream destination, preferred travel dates, and what kind of experience you're looking for..."
                ></textarea>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm mb-2 text-gray-300 group-focus-within:text-white transition-colors">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white focus:bg-white/20 transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Any additional information you'd like to share..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-white to-gray-200 text-gray-900 py-4 rounded-lg font-semibold tracking-wider uppercase hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 justify-center text-green-400 animate-fadeIn p-4 bg-green-400/10 rounded-lg">
                  <CheckCircle size={24} />
                  <p>Thank you for your message! We'll be in touch within 24 hours.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 justify-center text-red-400 animate-fadeIn p-4 bg-red-400/10 rounded-lg">
                  <AlertCircle size={24} />
                  <p>Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
