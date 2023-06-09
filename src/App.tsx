import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
 


import Navbar from './components/navbar/Navbar';

import './App.css';
import Recipe from './pages/recipi/Recipe';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/create">
            <Create/>
          </Route>

          <Route exact path="/search">
            <Search/>
          </Route>

          <Route exact path="/recipe/:id">
            <Recipe/>
          </Route>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
