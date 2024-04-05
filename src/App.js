import Sidebar from './Components/Sidebar.js';
import Navbar from './Components/Navbar.js';
import Content from './Components/Content.js';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="Appleft">
        <Sidebar/>
       </div>
       <div className="Appright">
       <Navbar/>
       <Content/>
     </div>
     </div>
  );
}

export default App;
