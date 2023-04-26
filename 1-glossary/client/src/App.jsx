import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';
import AddWord from './components/AddWord.jsx';

const App = () => {
// Input section to add new words and definitions (comp 1)
// List of individual word components (comp 2)
// Word/definition component (comp 3 nested in comp2)
const [glossary, setGlossary] = useState([]);

useEffect(() => {
  axios.get('/getWords')
    .then((wordsData) => {
      console.log('this is the data using axios!: ', wordsData);
      setGlossary(wordsData.data);
    })
    .catch((err) => {
      console.log('this is err from axios req!:', err);
    });
}, []);

  return (
    <div>
      <h1>Glossary List</h1>
      <AddWord />
      <GlossaryList glossary={ glossary }/>
    </div>
  );
};

export default App;