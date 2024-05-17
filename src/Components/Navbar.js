import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Pic from '../Image/Profile.png';
import '../Components/Navbar.css';
import { useState } from "react";

function Navbar(props) {
  // const [isLightMode, setIsLightMode] = useState(true);

  //  const toggleMode = () => {
  //     setIsLightMode(!isLightMode);
  //  };

   return (
      <div className="navbar">
         {/* left side */}
         <div className={`${props.isLightMode ? 'navbarlight' : 'navbardark'}`}>
         <div className="Navbarleft">
            <div className="Navbarleftchangetheme" onClick={props.toggleMode}>
               <MdOutlineWbSunny size={24} className={`sun ${props.isLightMode ? 'active' : ''}`} />
               <LuMoon size={24} className={`moon ${!props.isLightMode ? 'active' : ''}`} />
            </div>
            <div className="Navbarleftchangetext">
               {/* <p className={`${props.isLightMode ? 'active' : ''}`}>Light</p>
               <p className={`${!props.isLightMode ? 'active' : ''}`}>Dark</p> */}
               <p >{props.isLightMode? 'dark':'light'}</p>
            </div>
         </div>
         {/* right side */}
         <div className="Navbarright">
            <div className="Navbarrightnotify">
               <IoMdNotificationsOutline size={26} />
            </div>
            <div className="Navbarrightprofile">
               <FaAngleDown />
               <div className="Navbarrightprofilecontent">
                  <h4>Civa Kumar</h4>
                  <p>Wallet: $342.35</p>
               </div>
               <img src={Pic} alt="Profile" />
            </div>
         </div>
         </div>
      </div>
   );
}

export default Navbar;

