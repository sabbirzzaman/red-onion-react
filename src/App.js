import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import FilterItem from './Pages/Home/FilterItem/FilterItem';
import FoodArchive from './Pages/Home/FoodArchive/FoodArchive';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path=':foodCategory' element={<FilterItem></FilterItem>}></Route>
        </Route>
        <Route path='food/:foodId' element={<FoodArchive></FoodArchive>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='checkout/:id' element={<Checkout></Checkout>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
