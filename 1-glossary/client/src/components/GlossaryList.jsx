import React from 'react';
import GlossaryListEntry from './GlossaryListEntry.jsx';

const GlossaryList = ({ glossaryData, deleteWord, replaceWord }) => {
  return (
    <div>
      <h2>List of Words and Definitions</h2>
      {
        glossaryData.map((word, index) => (
          <GlossaryListEntry key={ index } word={ word } deleteWord={ deleteWord } replaceWord={ replaceWord }/>
        ))
      }
    </div>
  );
};

export default GlossaryList;