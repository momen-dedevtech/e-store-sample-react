import React from 'react';
import './App.css';
import Template from './Templates/Template';
import {BrowserRouter as Router} from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  draggable : false,
  autoClose : 3000

});

function App () {
    return (
      <Router>
        <div>
          <div><Template /></div>
        </div>
      </Router>
  );
}

export default App;
