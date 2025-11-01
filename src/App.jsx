import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
function App(){
    return(
      <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Contact/>
      </>
    )
}
export default App;