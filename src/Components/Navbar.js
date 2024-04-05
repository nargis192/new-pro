import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Pic from '../Image/Profile.png';
import '../Components/Navbar.css';


function Navbar() {
  return (
    <div className="Navbar">
        {/* leftside */}
       <div className="Navbarleft">
       <div className="Navbarleftchangetheme">
       <MdOutlineWbSunny  size={24}/>
       <LuMoon size={24} />
       </div>
       <div className="Navbarleftchangetext">
        <p>Light</p>
       </div>
       </div>
       {/* right side */}
       <div className="Navbarright">
       <div className="Navbarrightnotify">
         < IoMdNotificationsOutline size={26}  />
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
  );
}

export default Navbar;