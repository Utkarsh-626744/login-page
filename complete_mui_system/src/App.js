//import logo from './logo.svg';
import { Route, Switch,Router } from 'react-router-dom';
import './App.css';
import Illustration from './components/Illustration';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      {/* <Router>
      <Switch>
        <Route exact path="/">
          <> */}
          <Illustration/>
          <Login/>
          {/* </>
        </Route> */}
        
        {/* <Route path="/loged-in" element={<h1>logged in</h1>} />
      </Switch>
      </Router> */}
      
      
    </div>
  );
}

export default App;
