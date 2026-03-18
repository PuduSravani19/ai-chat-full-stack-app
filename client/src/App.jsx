import React, {useEffect} from 'react'

import { SendMessage } from './api/chatApi.js';
import './App.css'

function App() {
  useEffect(()=>{
    SendMessage("hello gemini").then(console.log);
  },[]);
 
  
  return (
    <>
    <h1>Testing API...</h1>
 </>
  )
}

export default App
