import logo from '../Image/logo2.png';
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Import arrow up icon
import { CiSettings } from "react-icons/ci";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import '../Components/Sidebar.css';
import { useState } from 'react';

function Sidebar(props) {

  const [projectlist, setprojectlist] = useState(false);
  const [managinglist, setmanaginglist] = useState(false);
  const [projectArrowUp, setProjectArrowUp] = useState(false); // State for project arrow direction
  const [managingArrowUp, setManagingArrowUp] = useState(false); // State for managing arrow direction
  
  const togglechangeprojectlist = () =>{
    setprojectlist(!projectlist);
    setProjectArrowUp(!projectArrowUp); // Toggle the arrow direction for project
  }

  const togglechangemanagingtlist = () =>{
    setmanaginglist(!managinglist);
    setManagingArrowUp(!managingArrowUp); // Toggle the arrow direction for managing
  }

  return (
    <div className="Sidebar" >
      <div className={`${props.isLightMode ? 'sidebarlight' : 'sidebardark'}`}>
      <div className="SidebarTop">
        <img className="logoimage" src={logo} alt='loading'/>
     </div>

     <div className="SidebarMid">
      <div className="Sidebarprojectdiv" onClick={togglechangeprojectlist}>
        <TbWorld  size={24} />
        <span>Projects</span>
        {projectArrowUp ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />} {/* Render arrow up/down based on state */}
      </div>
      <ul className={projectlist ? 'projectslist' : 'hidden'}>
        <li>Personal</li>
        <li>Work</li>
      </ul>
      <div className="Sidebarmanagingdiv" onClick={togglechangemanagingtlist}>
        <CiSettings size={24}  />
        <span>Managing</span>
        {managingArrowUp ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />} {/* Render arrow up/down based on state */}
      </div>
      <ul className={managinglist ? 'managinglists' : 'hidden'}>
        <li>Virtual servers</li>
        <li>Dedicated servers</li>
        <li>Serverless Interface</li>
        <li>Managed API</li>
      </ul>
      </div>

      <div className="SidebarBottom">
        <div className="Sidebarbilingdiv"><TbAlignBoxLeftStretch size={24}  /><span>Billing</span></div>
        <div className="Sidebarsupportdiv"><FaWhatsapp size={24}  /><span>Supports</span></div>
        <div className="Sidebarsettingdiv"><CiSettings size={24}  /><span>Settings</span></div>
        <div className="SidebarApiiv"><CiSettings size={24}  /><span>APIs</span></div>
      </div>

      <div className='sideebarFooter'></div>
      </div>
     

    </div>
  );
}

export default Sidebar;

