import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import DashBoard from './components/DashBoard/DashBoard'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFould'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
