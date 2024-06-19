import './App.css';
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup.js'
import {Provider} from 'react-redux'
import Cart from '../src/components/Cart.js'
import Orders from './components/Orders.js';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Appstore from './utils/appStore.js';


function App() {
  return (
     <> 

     <Provider store={Appstore}>

     <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/createUser' element={<Signup/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/orders' element={<Orders/>}></Route>
        </Routes>
      </div>
      </Router>
     </Provider>
     
    
     
     </>
     
  );
}

export default App;
