import './App.css';
import IndexPage from './Pages/IndexPage/IndexPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orden/:menu_id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
