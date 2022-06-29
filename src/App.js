import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './page/HomePage';
import OrderPage from './page/OrderPage';
import { Shop } from './page/Shop';
import { Banner } from './page/Banner';
import CheckOut from './page/CheckOut';
import { Authenticaton } from './components/Authenticaton';
import PrivetRoute from './components/PrivetRoute';
import { Categoris } from './page/Categoris';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/orderPage' element={<OrderPage/>} />
          <Route path='/item' element={<Categoris/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/checkout' element={
            <PrivetRoute>
            <CheckOut/>
            </PrivetRoute>
          
          } />
          
          <Route path='/login' element={<Authenticaton/>} />
        
        </Routes>
        <Banner/>
        <Footer />
      </Router>
      



    </div>
  );
}

export default App;
