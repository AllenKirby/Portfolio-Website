import { useState, useEffect } from 'react'

import { Home, AboutMe, Skills, MyProjects, Contact } from './pages/'
import { Footer } from './components'

import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="font-sans bg-primary">
      <Home />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact/>
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed w-full cursor-pointer bottom-6 text-secondary px-4 py-2 flex items-center justify-center gap-3 shadow-lg transition-all duration-300"
        >
          <FaArrowUp size={20}/> Back to the Top
        </button>
      )}
    </div>
  );
}

export default App;

