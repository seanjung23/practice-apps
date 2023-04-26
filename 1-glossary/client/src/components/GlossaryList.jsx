import React from 'react';
import GlossaryListEntry from './GlossaryListEntry.jsx';

const GlossaryList = ({ glossary }) => {
  return (
    <div>
      <h2>List of Words and Definitions</h2>
      {
        glossary.map((word, index) => (
          <GlossaryListEntry word={ word } key={ index }/>
        ))
      }
    </div>
  );
};

export default GlossaryList;