import { useState } from 'react'
import React from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cardcustom';
import Navbar from './components/Navbar';

import Accordioncustom from './components/Accordioncustom';
import Carouselcustom from './components/Carouselcustom';

function App() {
  const [count, setCount] = useState(0)

  const cardArray = [
    {
      title: 'Item 1 Title',
      text: 'Item 1 Text',
      imgURL: '/knight.png',
    },
    {
      title: 'Item 2 Title',
      text: 'Item 2 Text',
      imgURL: '/goblin.png',
    },
    {
      title: 'Item 3 Title',
      text: 'Item 3 Text',
      imgURL: '/dragon.png',
    },
  ];
  

  return (
    <>
    
    <Navbar></Navbar>
      <div className='my-auto'>
      <Carouselcustom cardItems={cardArray}>
        
      </Carouselcustom>
      </div>
      <Accordioncustom></Accordioncustom>
   
      <div className='text-6xl flex items-center justify-center my-5 text-white '>
  Funzionalita'
</div>


    <Card 
      title = 'ciao'
      content = "e' una bella giornata"
      image = '/death.png'
    ></Card>
     <Card 
      title = 'ciao'
      content = "e' una bella giornata"
      image = '/death.png'
    ></Card>
     <Card 
      title = 'ciao'
      content = "e' una bella giornata"
      image = '/death.png'
    ></Card>
     <Card 
      title = 'ciao'
      content = "e' una bella giornata"
      image = '/death.png'
    ></Card>
    
    
    </>
  )
}

export default App
