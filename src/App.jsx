import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FactsList from './FactsList.jsx';
import FactsCreate from './FactsCreate.jsx'
import FactsDetails from './FactsDetails.jsx';

function App() {
  

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FactsList/>}></Route>
      <Route path='/facts/create' element={<FactsCreate/>}></Route>
      <Route path='facts/detail/:userid/:id' element={<FactsDetails/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
