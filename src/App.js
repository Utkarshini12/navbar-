
import './App.css';
import Navbar from './components/Navbar'
import Posts from './components/Post'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   <Router>
     

     <Switch>

       <Route path = '/'>
         <Navbar/>
       </Route>
       <Route path = "/post">
         <Posts />

       </Route>
     </Switch>

    
    

    
     </Router>
  );
}

export default App;
