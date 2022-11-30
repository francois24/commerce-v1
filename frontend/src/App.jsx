import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar1 from './components/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Announcement from './components/Announcement';

function App() {
  return (
    <div>
      <Router>
        <Announcement />
        <Navbar1 />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Shop' exact element={<Shop />} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/Signup' exact element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
