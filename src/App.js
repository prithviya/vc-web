import './App.css';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import Banner from './Components/banner/banner';
import Feature from './Components/Feature/feature';
import Service from './Components/Services/service';
import Test from './Components/Testimonial/test';
import Gallery from './Components/Gallery/gallery';
import Booking from './Components/Booking/booking';
import About from './Components/About/about';

function App() {
  return (
    <>
     <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="services">
        <Service />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Test />
      </div>
      <div id="contact">
        <Booking />
      </div>    
    </>
  );
}

export default App;
