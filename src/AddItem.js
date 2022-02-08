import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react'; { /* For this purpose, we are using this to switch back focus to the search bar
after submitting the form. Refer to submit button. */}

const AddItem = ( { newItem, setNewItem, handleSubmit} ) => {
    const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus ref={inputRef} autoFocus id='AddItem' type='text' placeholder='Add Item' value={newItem} onChange={ (e) => setNewItem(e.target.value) } required></input>
        <button type='submit' aria-label='Add Item' onClick={ () => inputRef.current.focus() }><FaPlus /></button>
    </form>
  );
};

export default AddItem;
