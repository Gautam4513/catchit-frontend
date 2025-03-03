import React from 'react'
import Htw from './pages/Htw'
import Sender from './pages/Sender'
import Reciever from './pages/Reciever'
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <>
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Sender />} />
        <Route path='/how-to-use' element={<Htw/>}></Route>
        <Route path='/nearby/:code' element={<Reciever/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
