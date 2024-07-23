import React, { useState } from "react";
import './BookCreate.css';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="create-book-container">
      <form onSubmit={handleSubmit}>
        <h3>Add a Title</h3>
        <label>Title</label><br />
        <input className="input-field" value={title} onChange={handleChange} /><br /><br />
        <button className="create-button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
