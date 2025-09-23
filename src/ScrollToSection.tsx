// src/utils/ScrollToSection.jsx
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -80,
        });
      }, 100);
    }
  }, [location]);

  return null;
}
