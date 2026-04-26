import { ImmersiveHeroBackground } from './components/ImmersiveHeroBackground';
import { WaitingPage } from './components/WaitingPage';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function App() {
  const showMainPage = import.meta.env.VITE_SHOW_MAIN_PAGE === 'true';

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical', 
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-screen h-screen" style={{ zIndex: -1 }}>
        <ImmersiveHeroBackground />
      </div>

      {showMainPage ? (
        <>
          <Navigation />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </>
      ) : (
        <WaitingPage />
      )}
    </>
  );
}
