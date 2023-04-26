import React from 'react';

const AddWord = () => {
  return (
    <div>
      <label>
        Add Word to Glossary:
        <input placeholder='Add your new word here'/>
        <button type='submit'>Add Word</button>
      </label>
    </div>
  );
};

export default AddWord;