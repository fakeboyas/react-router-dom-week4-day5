import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header'
import CatAge from './pages/CatAgeConversion/CatAge'
import TextTransform from './pages/TextTransformApp/TextTransform'
import BMICal from './pages/BMICalculator/BMICal'

function App() {
  return <div className="App">
    <Router>
            <Header />

            <Switch>
               
                <Route exact path='/bmical'>
                    <BMICal />
                </Route>
                <Route exact path='/texttransform'>
                    <TextTransform />
                </Route>
                <Route exact path='/catage'>
                    <CatAge />
                </Route>

              
            </Switch>
        </Router>

  </div>;
}

export default App;
