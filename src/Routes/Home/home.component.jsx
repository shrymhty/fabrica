

import { Outlet } from "react-router-dom";
import Directory from "../../Components/directory/directory.component";
//import Menu from "../../Components/sections/section-menu.component";


const Home = () => {
  
  return (
    <div>
      <Directory /> 
    <Outlet/>
    </div>
    
  );
};

export default Home;
