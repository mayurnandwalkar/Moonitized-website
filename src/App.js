
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import SellerDashabord from './Pages/SellerDashabord';
import CreateNewProduct from './Pages/CreateNewProduct';
import EditProfileSetting from './models/EditProfileSetting';
import SignIn from './models/SignIn';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/seller-dashaboard' element={< SellerDashabord />}></Route>
          <Route exact path='/add-new-product' element={< CreateNewProduct/>}></Route>        
        </Routes>
      </Router> 
      <EditProfileSetting/>
      <SignIn/>
    </>
  );
}

export default App;
