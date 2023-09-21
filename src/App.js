import About from "./Components/About/about";
import Contact from "./Components/Contact me/contact";
import Footer from "./Components/Footer/footer";
import Intro from "./Components/Intro/intro";
import Navbar from "./Components/navBar/navbar";
// import './assets/main.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
