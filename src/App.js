import './App.css';
import image from './imgs/milling.unit/primeMill.jpg';
import OP3DandCeph_img from './imgs/panoramic/OP3DandCeph.jpg';
import midmark_img from './imgs/intraoralxray/midmark-preva-dc-intraoral-x-ray-e54.jpg';
import dental_accessories_img from './imgs/milling.unit/planmill50s.jpg';
import dcitelescope_img from './imgs/delivery.unit/dci-series-4-delivery-unit-telescoping-DCI-tele.jpg';

import Home from './routes/home.component/home.component';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/navigation/navigation.component';
import AuthenticatingUser from './components/authentication.component/authentication.component';
import Shop from './routes/shop/shop.component';


const App = () => {
  return (
    <Routes>
      <Route path='/buyDentalImagingDigitalProduct' element={<Navbar />}>
        <Route index={true} element={<Home
          primemill={image}
          op3d={OP3DandCeph_img}
          intraoral={midmark_img}
          deleveryunit={dcitelescope_img}
          accessories={dental_accessories_img}
        />} />
        <Route path='sign-in' element={<AuthenticatingUser />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>




  );
}

export default App;
