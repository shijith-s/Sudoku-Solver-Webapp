import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Input from './Input';
import Output from './Output';

function App() {
  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <Router>
        <Switch>
          <Route path="/solution">
            <Output />
            <div className="copyright">Developed by &copy; Shijith</div>
          </Route>
          <Route path="/">
            <Input />
            <div className="copyright">Developed by &copy; Shijith</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
