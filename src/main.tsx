import { createRoot } from 'react-dom/client';
import './assets/index.css';
import App from './App.tsx';
import   Header   from './header.tsx';
import Footer  from './footer.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
