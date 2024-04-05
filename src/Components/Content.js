import '../Components/Content.css';
import { IoSearchOutline } from "react-icons/io5";
import service from '../Image/service.png';
import { FaChevronDown } from "react-icons/fa";


function Content() {
  return (
    <div className="Content">
       <div className="Contentinner">
       <div className="Contentheading">
       <div className="Contentheadingleft">
        <h5>MY SERVICES</h5>
        <h5>IP ADDRESS</h5>
        <h5>STATUS</h5>
       </div>
       <div className="Contentheadingright">
       <div className="Contentheadingrightsearch">
       <IoSearchOutline size={24} />
       </div>
      
       <div className="Contentheadinglightbutton">
       <h5>+ Build Website</h5>
       </div>
       </div>
       </div>


       <div className="Contentlist">
       <div className="Contentlist1">
       <div className="Contentlist1service">
        <img src={service} alt='loading'/>
        <div className="Contentlist1service1">
        <h5>Solidhash Instance</h5>
        <p>#Build-2467</p> 
        </div>
        </div>

        <div className="Contentlist1address">
        <h4>0.0.0.0 </h4>
            <p> :80</p>
        </div>
        
        <div className="Contentlist1status">
           <button className="ready">READY</button>
           <button className="deployed">DEPLOYED</button>
           <button className="free">FREE</button>
        </div>

        <div className="Contentlist1button">
        <button className='connect'>Connect</button>
           <button className='monitor'>Monitor</button>
           <button className='arrrow'><FaChevronDown /></button>
        </div>

        </div>

        {/* 2 */}
        <div className="Contentlist1">
       <div className="Contentlist1service">
        <img src={service} alt='loading'/>
        <div className="Contentlist1service1">
        <h5>Solidhash Instance</h5>
        <p>#Build-2467</p> 
        </div>
        </div>

        <div className="Contentlist1address">
        <h4>
128.987.244 </h4>
            <p> :80</p>
        </div>
        
        <div className="Contentlist1status">
           <button className="ready">READY</button>
           <button className="deployed">DEPLOYED</button>
           <button className="free">FREE</button>
        </div>

        <div className="Contentlist1button">
        <button className='connect'>Connect</button>
           <button className='monitor'>Monitor</button>
           <button className='arrrow'><FaChevronDown /></button>
        </div>

        </div>
        {/* 3 */}
        <div className="Contentlist1">
       <div className="Contentlist1service">
        <img src={service} alt='loading'/>
        <div className="Contentlist1service1">
        <h5>Solidhash Instance</h5>
        <p>#Build-2467</p> 
        </div>
        </div>

        <div className="Contentlist1address">
        <h4>
120.769.439 </h4>
            <p> :80</p>
        </div>
        
        <div className="Contentlist1status">
           <button className="ready">READY</button>
           <button className="deployed">DEPLOYED</button>
           <button className="free">FREE</button>
        </div>

        <div className="Contentlist1button">
        <button className='connect'>Connect</button>
           <button className='monitor'>Monitor</button>
           <button className='arrrow'><FaChevronDown /></button>
        </div>

        </div>
        {/* 4 */}
        <div className="Contentlist1">
       <div className="Contentlist1service">
        <img src={service} alt='loading'/>
        <div className="Contentlist1service1">
        <h5>Solidhash Instance</h5>
        <p>#Build-2467</p> 
        </div>
        </div>

        <div className="Contentlist1address">
        <h4>
156.256.854</h4>
            <p> :80</p>
        </div>
        
        <div className="Contentlist1status">
           <button className="ready">READY</button>
           <button className="deployed">DEPLOYED</button>
           <button className="free">FREE</button>
        </div>

        <div className="Contentlist1button">
        <button className='connect'>Connect</button>
           <button className='monitor'>Monitor</button>
           <button className='arrrow'><FaChevronDown /></button>
        </div>

        </div>
        {/* 5 */}
        <div className="Contentlist1">
       <div className="Contentlist1service">
        <img src={service} alt='loading'/>
        <div className="Contentlist1service1">
        <h5>Solidhash Instance</h5>
        <p>#Build-2467</p> 
        </div>
        </div>

        <div className="Contentlist1address">
        <h4>
438.255.002</h4>
            <p> :80</p>
        </div>
        
        <div className="Contentlist1status">
           <button className="ready">READY</button>
           <button className="deployed">DEPLOYED</button>
           <button className="free">FREE</button>
        </div>

        <div className="Contentlist1button">
        <button className='connect'>Connect</button>
           <button className='monitor'>Monitor</button>
           <button className='arrrow'><FaChevronDown /></button>
        </div>

        </div>
        

       </div>
       </div>
    </div>
  );
}

export default Content;