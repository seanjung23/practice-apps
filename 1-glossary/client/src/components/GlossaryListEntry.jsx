import React, { useState } from 'react';

const GlossaryListEntry = ({ word, deleteWord, replaceWord }) => {
  const [isShown, setIsShown] = useState(false);

  const showEditDelete = () => {
    setIsShown(!isShown); ``
  }

  return (
    <div>
      <h4>{word.word}:</h4>
      <p>{word.definition}</p>
      <button type='button' onClick={() => showEditDelete()}>Edit</button>
      <button type='submit' onClick={() => deleteWord()}>Delete</button>
      {isShown && (
        <div>
          <input placeholder='replace existing word here'/>
          <input placeholder='replace existing definition here'/>
          <button onClick={() => replaceWord()}>Replace</button>
        </div>
      )}
    </div>
  )
}
export default GlossaryListEntry;