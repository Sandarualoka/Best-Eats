import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import Login_Prisoner from "./components/Login_Prisoner";
import Login_Staff from './components/Login_Staff';
import UserSelection from "./components/UserSelection";
import Verification from './components/Verification';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
          <Route path='/' element={<UserSelection/>} />
          <Route path='/login_staff' element={<Login_Staff/>}/>
          <Route path='/login_prisoner' element={<Login_Prisoner/>} />
          <Route path='/otp-ver' element={<Verification/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
