import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlossaryList from './components/GlossaryList.jsx';
import AddWord from './components/AddWord.jsx';
import Search from './components/Search.jsx';

const App = () => {
  // Input section to add new words and definitions (comp 1)
  // List of individual word components (comp 2)
  // Word/definition component (comp 3 nested in comp2)
  const [glossaryData, setGlossaryData] = useState([]);

  useEffect(() => populatePage(), []);

  const populatePage = () => {
    axios.get('/Glossary')
      .then((wordsData) => {
        setGlossaryData(wordsData.data);
      })
      .catch((err) => {
        console.log('error while sending get request to server!: ', err);
      });
  };

  const createWord = () => {
    let newWord = document.getElementsByClassName('user-input')[0].value;
    let newDefinition = document.getElementsByClassName('user-input')[1].value;

    let request = {
      word: newWord,
      definition: newDefinition
    };

    axios.post('/Glossary', request)
      .then((wordsData) => {
        setGlossaryData(wordsData.data);
      })
      .catch((err) => {
        console.log('error while sending post request to server!: ', err);
      });
  };

  const deleteWord = (word) => {
    axios({
      url: '/Glossary',
      method: 'Delete',
      data: word
    })
      .then((wordsData) => {
        setGlossaryData(wordsData.data);
      })
      .catch((err) => {
        console.log('error while sending delete request to server!: ', err);
      });
  };

  const replaceWord = (word) => {
    let editWord = document.getElementsByClassName('user-edit')[0].value;
    let editDefinition = document.getElementsByClassName('user-edit')[1].value;

    word.updatedWord = editWord;
    word.updatedDefinition = editDefinition;

    axios.patch('/Glossary', word)
      .then((wordsData) => {
        setGlossaryData(wordsData.data);
      })
      .catch((err) => {
        console.log('error sending patch request to server!: ', err);
      });
  };

  const searchWord = (query) => {
    let request = {
      word: query
    }

    axios.post('/Search', request)
      .then((wordsData) => {
        setGlossaryData(wordsData.data);
      })
      .catch((err) => {
        console.log('error sending search(post) request to server: ', err);
      });
  };

  return (
    <div>
      <h1 onClick={populatePage}>Glossary List</h1>
      <Search searchWord={searchWord}/>
      <AddWord createWord={ createWord }/>
      <GlossaryList glossaryData={ glossaryData } deleteWord={ deleteWord } replaceWord={ replaceWord }/>
    </div>
  );
};

export default App;