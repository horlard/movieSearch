import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';




import Header from './components/header';
import Home from './components/home';
import MoviesDetails from './components/moviesDetails';


const App =()=> {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/movie/:id' component={MoviesDetails}/>
      </Router>
        

    </React.Fragment>
    
  )
}


export default App;