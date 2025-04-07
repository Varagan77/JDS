import React, { useState, useEffect } from 'react';
import './assets/App.css';
import './assets/index.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from './header';
import Footer from './footer';
import Logo from './logo';
import Team from './team';
import Service from './service';
import Contact from './contact';
import Theme from './theme';

//images
import image0 from './assets/image/P_1.png';
import image1 from './assets/image/P_2.png';
import image2 from './assets/image/P_3.png';
import image3 from './assets/image/P_4.png';
import image4 from './assets/image/P_1.png';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') setDarkMode(true);
  }, []);

  //background array
  const sections = [
    { offset: 0, image: image0, speed: 0.3 }, 
    { offset: 1, image: image1, speed: 0.2 },  
    { offset: 2, image: image2, speed: 0.1 },  
    { offset: 3, image: image3, speed: 0.4 },  
    { offset: 4, image: image4, speed: 0.5 },  
  ];

  return (
    <Parallax pages={5} style={{ backgroundColor: 'var(--bg-color)' }}>

    {sections.map(({ offset, image, speed }) => (
      <ParallaxLayer
        key={offset}
        offset={offset}
        speed={speed} 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '140vh',  
          zIndex: -1, 
          opacity: 0.85,  
            mixBlendMode: 'overlay', 
        }}
      />
    ))}

      <ParallaxLayer offset={0} speed={0.2}>
        <Logo />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} className="center">
        <Header />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5} className="center">
        <Team />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5} className="center">
        <Service />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5} className="center">
        <Contact />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5} className="center">
        <Footer />
      </ParallaxLayer>

      <Theme darkMode={darkMode} setDarkMode={setDarkMode} />
    </Parallax>
  );
};

export default App;
