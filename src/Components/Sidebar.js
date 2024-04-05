import logo from '../Image/logo.png';
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import '../Components/Sidebar.css';




function Sidebar() {
  return (
    //first//
    <div className="Sidebar">
      <div className="SidebarTop">
        <img className="logoimage" src={logo} alt='loading'/>
     </div>

     {/* second */}
      <div className="SidebarMid">
      <div className="Sidebarprojectdiv">
      <TbWorld  size={24} />
      <span>Projects</span>
      <IoIosArrowDown size={20}  />

      </div>
      <div className="Sidebarmanagingdiv">
      <CiSettings size={24}  />
      <span>Managing</span>
      <IoIosArrowDown size={20}  />
      </div>
      </div>

      {/* third */}

      <div className="SidebarBottom">
      <div className="Sidebarbilingdiv"><TbAlignBoxLeftStretch size={24}  /><span>Billing</span></div>
      <div className="Sidebarsupportdiv"><FaWhatsapp size={24}  /><span>Supports</span></div>
      <div className="Sidebarsettingdiv"><CiSettings size={24}  /><span>Settings</span></div>
      <div className="SidebarApiiv"><CiSettings size={24}  /><span>APIs</span></div>
      </div>

      {/* fourth */}

      <div className='sideebarFooter'></div>

    </div>
  );
}

export default Sidebar;