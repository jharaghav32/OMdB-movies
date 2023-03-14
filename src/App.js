
import './App.css';
import Navbar from './component/Navbar';
import MovieDetails from './component/MovieDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home'
import Search from './component/Search';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search/:searchTerm' element={<Search/>}/>
      <Route path = '/detail/:imdbId' element={<MovieDetails/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
