import './App.css';
import Footer from "./Componant/Footer";
import  {Navbar}  from './Componant/Navbar';
import AllRoute from './Componant/AllRoutes';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
