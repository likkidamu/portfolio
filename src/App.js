import Navbar from "./Components/Navbar";
import './App.css';
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Vork from "./Components/Vork";
import  Portfolio from "./Components/portfolio";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme=  useContext(themeContext)
  const darkTheme = theme.state.darkmode;
  return (
    <div className="App"
      style ={{background: darkTheme? 'black': '',
        color: darkTheme? 'white': '',
        position: 'relative',                      // Required for z-index to Vork
        zIndex: 1  
      }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Vork/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
