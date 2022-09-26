import './App.css';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import Banner from './Components/banner/banner';
import Service from './Components/Services/service';
import Test from './Components/Testimonial/test';
import Gallery from './Components/Gallery/gallery';
import Booking from './Components/Booking/booking';
import About from './Components/About/about';
import Choose from './Components/Choose/choose';
import Customer from './Components/Client/customer';
import Branches from './Components/Branches/branch';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
     <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About/>
      </div>
      <div>
        <Choose/>
      </div>
      <div id="contact">
        <Booking />
      </div> 
      <div>
        <Customer/>
      </div>
      <div>
        <Branches/>
      </div>
      <div id="services">
        <Service />
      </div>
      <div>
        <Test />
      </div>
      <div>
        <Gallery />
      </div>  
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
