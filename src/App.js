import './App.css';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import Banner from './Components/banner/banner';
import Feature from './Components/Feature/feature';
import Service from './Components/Services/service';
import Test from './Components/Testimonial/test';
import Gallery from './Components/Gallery/gallery';
import Booking from './Components/Booking/booking';

function App() {
  return (
    <>
      <Banner/>
      <Feature/>
      <Service/>
      <Gallery/>
      <Test/>
      <Booking/>      
    </>
  );
}

export default App;
