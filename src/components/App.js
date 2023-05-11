import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home  from './../routes/Home'
import  Pages  from './../routes/Pages';


const App = () => {
  return (
    <>
    <Layout/>
  
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Pages" element={<Pages/>}></Route>

        
          <Route path="*" element={<h1>Page Not found</h1>} />
       
      </Routes>
    </>
  );
};

export default App;
