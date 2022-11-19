import './App.css';
//route import
import React, { useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import {useDispatch} from 'react-redux'
//componete import
import LoginCmp from './componants/registration';
import SignUpCmp from './componants/registration/Signup';
import NavBarCmp from './componants/NavBar';
import {FetchUser} from './features/UsersSlice'
import HomeCmp from './componants/HomeCmp';
import AdminCmp from './componants/admin';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(FetchUser())
  },[])
  return (
    <>
  <NavBarCmp/>
    <Routes>
      <Route index element={<LoginCmp/>}/>
      <Route path='/signup' element={<SignUpCmp/>}/>
      <Route path='/home' element={<HomeCmp/>}/>
    </Routes>
    <Routes>
      <Route path={`/admin/u1XO2KeIQWXMshJCP340hBZnd813`} element={<AdminCmp/>}/>
    </Routes>
    
    </>
  );
}

export default App;
