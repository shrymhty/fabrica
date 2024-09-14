import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home.component";
import Navbar from "./Routes/navigation/navbar.component";
import Authentication from "./Routes/authentication/authentication.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/checkout.component";
import Contact from "./Routes/contact/contact.component";

const App = () => {
  
  return (
    <div>
       <Routes>
      <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='shop/*' element={<Shop />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='auth' element={<Authentication />}/>
      <Route path= '/checkout' element={<Checkout/>}/>
        </Route>
    </Routes>
    </div>
   
    
  );
};

export default App;
