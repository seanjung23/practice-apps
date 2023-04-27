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
    axios.get('/glossary')
      .then((wordsData) => {
        console.log('this is the data using axios!: ', wordsData);
        setGlossary(wordsData.data);
      })
      .catch((err) => {
        console.log('this is err from axios req!:', err);
      });
  }, [/*glossary*/]);

  const createWord = () => {
    let newWord = document.getElementsByClassName('user-input')[0].value;
    let newDefinition = document.getElementsByClassName('user-input')[1].value;

    let request = {
      word: newWord,
      definition: newDefinition
    }

    axios.post('/glossary', request)
      .then((wordsData) => {
        console.log('successfully posted new word! (App.js):', wordsData.data);
        setGlossary(wordsData.data);
      })
      .catch((err) => {
        console.log('there was an error posting new word! (App.js): ', err);
      })
  }

  const deleteWord = () => {
    console.log('delete!');
  }

  const replaceWord = () => {
    console.log('replace!')
  }

  return (
    <div>
      <h1>Glossary List</h1>
      <AddWord createWord={ createWord }/>
      <GlossaryList glossary={ glossary } deleteWord={deleteWord} replaceWord={replaceWord}/>
    </div>
  );
};

export default App;