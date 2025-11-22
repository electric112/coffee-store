
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import {  Routes, Route} from 'react-router-dom' ; 
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact' ; 

function App() {
  

  return (
    <>
      
        <Routes>
          <Route path='/about' element={<About/>}/>
      <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />
        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:param" element={<ProductDetails />} />

        </Routes>
        
    </>
  );
}


export default App;
