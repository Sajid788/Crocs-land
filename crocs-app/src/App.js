import './App.css';
import Home from './Page/Home';
import Footer from "./Componant/Footer";
import  {Navbar}  from './Componant/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
