import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/Programs';
import Plans from './components/Plans/Plans';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/testimonial/Testimonial';
import Join from './components/join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Hero/>
     <Programs/>
     <Reasons/>
     <Plans/>
     <Testimonial/>
     <Join/>
     <Footer/>
    </div>
  );
}

export default App;
