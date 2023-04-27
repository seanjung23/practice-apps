import React, { useState } from 'react';

const GlossaryListEntry = ({ word, deleteWord, replaceWord }) => {
  const [ isShown, setIsShown ] = useState(false);

  const showEditDelete = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <h4>{word.word}:</h4>
      <p>{word.definition}</p>
      <button type='button' onClick={ showEditDelete }>Edit</button>
      <button type='submit' onClick={ () => deleteWord(word) }>Delete</button>
      {isShown && (
        <div>
          <input className='user-edit' placeholder='Replace word here!' type='text'/>
          <input className='user-edit' placeholder='Replace definition here!' type='text'/>
          <button type='submit' onClick={() => {
            replaceWord(word);
            showEditDelete();
            }}>Replace</button>
        </div>
      )}
    </div>
  );
};
export default GlossaryListEntry;