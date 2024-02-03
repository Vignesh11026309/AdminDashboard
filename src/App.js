import SideBar from "./SideBar";
import "./App.css";
import NavBar from "./NavBar";
import Cards from "./Cards";

function App() {
  return (
    <div className="app-container">
      <div className="sideNavBar">
        <SideBar />
      </div> 
        <div className="main-content">
          <Cards />
        </div>
  
    </div>

    // <div className="parentNavBar" >
    //   <div className="sideNavBar" >
    //     <SideBar />
    //   </div>
    //   <div className="topNavBar">
    //     <NavBar />
    //   </div>s
    // </div>
  );
}

export default App;
