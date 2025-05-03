import { useContext, useState } from 'react'
import {Route,Routes} from'react-router-dom';
import Start from './pages/Start';
import CaptainSignup from './pages/CaptainSignup';
import Captainlogin from './pages/Captainlogin';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import { UserDataContext } from './context/UserContext';
import Home from './pages/Home';
function App() {
  const [count, setCount] = useState(0)
const ans=useContext(UserDataContext);
console.log(ans);

  return (
 <div>
  <Routes>
    <Route path='/'element={<Start/>}/> 
    <Route path='/login' element={<UserLogin />} />

    <Route path='/signup' element={<UserSignup />} />

    <Route path='/captain-login' element={<Captainlogin />} />
    <Route path='/captain-signup' element={<CaptainSignup />} />
<Route path='/home' element={<Home/>}/>
  </Routes>
 </div>
  )
}

export default App
