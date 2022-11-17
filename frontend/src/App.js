import './App.css';
import IndexPageClient from './Pages/IndexPage/IndexPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginAdmon from './Pages/LoginAdmon/LoginAdmon';
import CrudMenu from './Pages/CrudMenu/CrudMenu';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/client" element={<IndexPageClient />} />
        <Route path="/client/menu" element={<MenuPage />} />
        <Route path="/client/orden/:menu_id" element={<DetailsPage />}/>
        <Route path="/admon/" element={<LoginAdmon />}/>
        <Route path="/admon/menucrud" element={<CrudMenu/>}/>
      </Routes>
    </div>
  );
}

export default App;
