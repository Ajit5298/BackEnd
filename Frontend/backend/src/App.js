import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import { Homepage } from './Components/Homepage';
import Sidebar from './Components/Sidebar';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar'
import AddProduct from './Components/AddProduct';
import AllProducts from './Components/AllProducts';
import Profile from './Components/Profile';
import ProductsHandler from './Components/Products/ProductsHandler';
import { Kids } from './Components/Kids';
import { Women } from './Components/Women';
import { Men } from './Components/Men';




function App() {
  return (
    <div className="App">
    <Routes>
      <Route>
      <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/sidebar' element={<Sidebar/>}/>
        <Route excat path='footer' element={<Footer />} />
        <Route excat path='add-product' element={<AddProduct />} />
        <Route excat path='all-products' element={<AllProducts />} />
        <Route exact path='/productshandler' element={<ProductsHandler />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/nav' element={<Navbar />} />
        <Route exact path='/women' element={<Women />} />
        <Route exact path='/kids' element={<Kids />} />
        <Route exact path='/men' element={<Men />} />

        
      
      </Route>
    </Routes>
    </div>
  );
}

export default App;