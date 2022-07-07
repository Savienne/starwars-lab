import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import  AllStarships  from './pages/AllStarships/AllStarships';



function App() {
  return (
  <>
  <NavBar />
  <AllStarships />
  {/* <Routes>
    <Route path='/starship' element={<StarshipDetails />} />
    </Routes> */}
  </>
  );
}

export default App;
