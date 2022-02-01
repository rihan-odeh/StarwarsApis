import './App.css';
import React, { useState } from 'react';

import {Router, Navigate} from 'react-router-dom';//to use navigate
import APICaller from './components/APICaller';

function App() {

  //list of dropdown categories
  const categories = ['', 'Planets', 'People', 'Films', 'Starships', 'Vehicles'];

  //State variables
  const [category, setCategory] = useState(categories[0]);
  const [input, setInput] = useState('');//for form input value

  //function to process the submit button click
  const handleSubmit = e => {
    //first prevent default
    e.preventDefault();

    //second send the form data to other components
    //first check for improper submission, if error, send in path /error/error
    {(category === '' || isNaN(input) || input === '') ? Navigate(`/error/error`) :
    Navigate(`/${category}/${input}`)}


  }

  return (
    <div className="App">

      {/* search form */}
      <form onSubmit={handleSubmit}>
        <label>Search For: </label>
        <select value={category} onChange= {e => setCategory(e.target.value)}>

          {/* map out all the options */}
          {/* convert the value to lowercase as the API is case sensitive */}
          {
            categories.map( (cat, i) => {
              return(
                <option key={i} value={cat.toLowerCase()}>{cat === '' ? "----Select an Item------" : cat}</option>
              )
            })
          }

        </select>

        {/* add in ID textbox */}
        <label>ID: </label>
        <input type="text" value={input} onChange={ e=> {setInput(e.target.value)}}/>

        {/* add submit button */}
        <input type="submit" />
      </form>

      {/* set up router to actually call the component  */}
      <Router>
          <APICaller path="/:category/:input" />
      </Router>

    </div>
  );
}

export default App;

