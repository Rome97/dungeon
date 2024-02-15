import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signin from './components/Login.jsx'
import SignupForm from './components/Signupform.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Signin></Signin>,
  },
  {
    path: "/register",
    element: <SignupForm></SignupForm>,
  },
 
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
