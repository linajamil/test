import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Navbar from './navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/home' element={<Home />} />
      {/* <Route exact path='/contact' element={<Contact />} /> */}
    </Routes>

    </>
    
  );
}

export default App;
