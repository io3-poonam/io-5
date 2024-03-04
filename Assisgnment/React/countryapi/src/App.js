import Country from './component/country/index';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Product/> */}
    <BrowserRouter>
    <Routes>
      {/* <Route path="/country" element={<Country/>}/> */}
    </Routes>
    </BrowserRouter>
    <Country/>
    </>
  );
}

export default App;
