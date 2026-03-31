import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import PumpLoader from './components/PumpLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <PumpLoader />;
  }

  return (
    <div className="smooth-scroll">
      <Hero />
    </div>
  );
}
