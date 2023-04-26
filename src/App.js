
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 import SellerDashabord from './Pages/SellerDashabord';
 import CreateNewProduct from './Pages/CreateNewProduct';
 import EditProfileSetting from './models/EditProfileSetting';
 import SignIn from './models/SignIn';
 import JoinMoonetized from './models/JoinMoonetized';
 import LandingPage from './Pages/LandingPage';
 import Home from './Pages/Home';
 import './App.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< LandingPage />}></Route>
          <Route exact path='/seller-dashaboard' element={< SellerDashabord />}></Route>
          <Route exact path='/add-new-product' element={< CreateNewProduct/>}></Route>
          <Route exact path='/home' element={< Home/>}></Route>        

        </Routes>
      </Router> 
      <EditProfileSetting/>
      <SignIn/>
      <JoinMoonetized/>
    </>
  );
}

export default App;
