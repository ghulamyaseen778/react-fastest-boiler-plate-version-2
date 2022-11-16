import './App.css';
//route import
import React from 'react'
import {Route,Routes} from 'react-router-dom'
//componete import
import LoginCmp from './componants/registration';
import SignUpCmp from './componants/registration/Signup';


function App() {
  return (
    <>
    <Routes>
      <Route index element={<LoginCmp/>}/>
      <Route path='/signup' element={<SignUpCmp/>}/>
    </Routes>
    <Routes>
      <Route path='/si' element={<h1>hello</h1>}/>
    </Routes>
    
    </>
  );
}

export default App;
