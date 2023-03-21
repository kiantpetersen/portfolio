// import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import './styles/css/style.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Languages from './Pages/Languages';
import Contact from './Pages/Contact';
import Exhibit from './Pages/Exhibit';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/languages' element={<Languages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/exhibit' element={<Exhibit />} />
      </Routes>
      {/* <Homepage /> */}


    </div>
  );
}

export default App;
