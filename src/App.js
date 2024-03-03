import './App.css';
import About from './components/About';
import BackToTopBtn from './components/BackToTopBtn';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
// import Portfolio from './components/Portfolio';
import Portfolio1 from './components/Portfolio1';
import Services from './components/Services';
import Skill from './components/Skill';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skill/>
      <Services/>
      <Portfolio1/>
      {/* <Portfolio/> */}
      <Contact/>
      <Footer/>
      <BackToTopBtn/>
    </div>
  );
}

export default App;
