import './App.css';
import Footer from "./Componant/Footer";
import  {Navbar}  from './Componant/Navbar';
import AllRoute from './Componant/AllRoutes';
import PaymentSuccessPage from './Page/PymentSuccessPage';
import ScrollToTopButton from './Componant/ScrollToTopButton';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRoute/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
