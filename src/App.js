
import './App.css';
import MobileAppContent from './pages/MobileApp/mobileApp';
import LoginPage from './pages/LoginPage/loginPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Main from './components/Main/main';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='crm'>
          <NavBar/>
          <Main/>
        </div>
        
        <Routes>
          <Route path='/selections/*' element={<MobileAppContent/>}/>
          <Route path='/autorization' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
