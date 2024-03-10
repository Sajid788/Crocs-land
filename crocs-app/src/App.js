import './App.css';
import Footer from "./Componant/Footer";
import  {Navbar}  from './Componant/Navbar';
import AllRoute from './Componant/AllRoutes';
import PaymentSuccessPage from './Page/PymentSuccessPage';


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
