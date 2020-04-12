import React,{useState,useContext,createContext,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LocationContext from './utils/locationContext' 
import Home from "./pages/home"
import Nav from './components/Nav'
function App() {
  const [locationState,setLocationState]=useState({
    name:""
  })
  // locationState={
  //   name:""
  // }

  useEffect(()=>{

     setLocationState({
       name:""
     })
  },[])
  return (

    <LocationContext.Provider value={locationState}>

      <Nav     />
      <Router>
       <Route exact path="/">
        <Home />
       </Route>
     </Router>

    </LocationContext.Provider>
     
  );
}

export default App;
