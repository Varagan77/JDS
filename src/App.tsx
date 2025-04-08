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
import Navbar from './navbar'

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
    { offset: 0, image: 'https://i.redd.it/lxubnd28ojte1.png', speed: 0.3 },
    { offset: 1, image: 'https://i.redd.it/z2ismiyz9vse1.jpeg', speed: 0.2 },
    { offset: 2, image: 'https://i.redd.it/n2ebqg5qjkse1.png', speed: 0.1 },
    { offset: 3, image: 'https://i.redd.it/hqr4gblfw0se1.png', speed: 0.4 },
    { offset: 4, image: 'https://i.redd.it/ls1t1c76ufse1.jpeg', speed: 0.5 },
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
          height: '150vh',  
          zIndex: -1, 
          opacity: 1,  
          mixBlendMode: 'overlay', 
          filter: 'brightness(20%)',
        }}
      />
    ))}

      <ParallaxLayer offset={0} speed={0.2}>
        <Logo />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} className="center">
        <Header />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} className="center">
        <Navbar />
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
