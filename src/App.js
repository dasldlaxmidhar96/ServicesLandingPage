import React from 'react';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Newsletter from './Components/Newsletter';
import Analytics from './Components/Analytics';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
