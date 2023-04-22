
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import SellerDashabord from './Pages/SellerDashabord';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/seller-dashaboard' element={< SellerDashabord />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
