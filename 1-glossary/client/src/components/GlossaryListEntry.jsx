import React from 'react';

const GlossaryListEntry = ({ word }) => {
  return (
    <div>
      <h4>{word.word}:</h4>
      <p>{word.definition}</p>
    </div>
  );
};
export default GlossaryListEntry;