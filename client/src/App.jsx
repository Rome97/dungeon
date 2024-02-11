import { useState } from 'react'
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcustom from './components/Navbarcustom';
import Card from './components/Cardcustom'
import Cardcustom from './components/Cardcustom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{marginBottom:"2rem"}}>
     <Navbarcustom></Navbarcustom>
     </div>
     <div style={{marginTop:"2rem"}} className='m-auto'>
      <Cardcustom  imgURL="/death.png" title="prova" button="vai" text="prova per props" ></Cardcustom>
     </div>
    </>
  )
}

export default App
