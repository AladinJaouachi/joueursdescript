import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from './Pages/HomePage';
import { Players } from './Players';
import "./componenets/Style.css";

function App() {
  return (
    <div className="App">
      <HomePage  Players={Players} />
      
     
    </div>
  );
}


export default App;
