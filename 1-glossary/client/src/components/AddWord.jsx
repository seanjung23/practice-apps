import React from 'react';

const AddWord = ({ createWord }) => {
  return (
    <div>
      <label>
        Add Word to Glossary:
        <input className='user-input' placeholder='Add your new word here'/>
        <input className='user-input' placeholder='Add your definition here'/>
        <button type='submit' onClick={() => createWord()}>Add Word</button>
      </label>
    </div>
  );
};

export default AddWord;