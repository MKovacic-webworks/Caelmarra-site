import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Packages from './components/Packages';
import MeetYourAgent from './components/MeetYourAgent';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <Packages />
      <MeetYourAgent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
