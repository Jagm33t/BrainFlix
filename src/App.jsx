

import './App.scss';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'




// Importing different components jsx files

import Navhead from './components/Navhead/Navhead';







function App() {



  return (
    <>

<BrowserRouter>
<div>
 <Navhead/>

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={ <Navigate to="/" /> }/>
    <Route path="/video/:videoId" element={<Home />} />
    <Route path='upload' element={<Upload/>}/>
  </Routes>
</div>

</BrowserRouter>


    </>
  )


}
   
  


export default App;
