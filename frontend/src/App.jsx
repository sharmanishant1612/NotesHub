import { useState,useEffect } from 'react'
import './App.css'

import { Outlet } from "react-router-dom"










function App() {
  
  

  return (
    <>
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default App



//  <BrowserRouter>
     
          
//             <Routes>
//               <Route path='/' element={<Layout/>}>
//                   <Route index element ={<Home/>}/>
//                   <Route path='/about' element={<About/>}/>
//                   <Route path='/notes' element={<Notes/>}/>
//                   <Route path='/resource' element={<Resource/>}/>
//                   <Route path='/blog' element={<Blog/>}/>
//                   <Route path='/contact' element={<Contact/>}/>
//                   {/* <Route path='resource' element={<Resource/>}/> */}
//               </Route>
//             </Routes>
          
//      </BrowserRouter>
