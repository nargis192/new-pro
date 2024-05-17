import Sidebar from './Components/Sidebar.js';
import Navbar from './Components/Navbar.js';
import Content from './Components/Content.js';
import './App.css';
import { useState } from 'react';

function App() {

  const [isLightMode, setIsLightMode] = useState(true);

   const toggleMode = () => {
      setIsLightMode(!isLightMode);
   };

  return (
    <div className="App">
       <div className={`${isLightMode ? 'light' : 'dark'}`}>
        <div className="Appleft">
        <Sidebar isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
       </div>
       <div className="Appright">
       <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} toggleMode={toggleMode} />
       <Content isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
        </div> 
       </div>
       
     </div>
  );
}

export default App;
