import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Routing from "./Routing/Routing";





function App() {
 
  return (
    <div className="App">
<NavBar/>
<Routing/>
<ScrollToTopButton/>
<Footer/>
    </div>
  );
}

export default App;
