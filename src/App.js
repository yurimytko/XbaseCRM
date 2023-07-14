
import './App.css';
import LoginPage from './pages/LoginPage/loginPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Main from './components/Main/main';
import Selections from './pages/Selections/Selections';


function App() {
  return (
    <div className="App">
      <Router>
        <div id = 'crm' className='crm'>
          <NavBar/>
          <Main/>
        </div>
        
        <Routes>
          <Route path='/selections/*' element={<Selections/>}/>
          <Route path='/autorization' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
