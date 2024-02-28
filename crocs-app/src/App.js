import './App.css';
import Home from './Page/Home';
import Footer from "./Componant/Footer";
import  {Navbar}  from './Componant/Navbar';
import AllRoute from './Componant/AllRoutes';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRoute/>
       <Home/>
      <Footer/>
    </div>
  );
}

export default App;
