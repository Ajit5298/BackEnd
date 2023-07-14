import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import { Homepage } from './Components/Homepage';
import { Men } from './Components/Men';
import Sidebar from './Components/Sidebar';
import { ProductPage } from './Components/SinglePage';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route>
      <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/men' element={<Men/>}/>
        <Route exact path='/sidebar' element={<Sidebar/>}/>
        <Route excat path='singlepage' element={<ProductPage/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route excat path='footer' element={<Footer />} />
        <Route excat path='nav' element={<Navbar />} />
        
      
      </Route>
    </Routes>
    </div>
  );
}

export default App;
