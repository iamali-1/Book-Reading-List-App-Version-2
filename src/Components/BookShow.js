import React, { useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import BookEdit from './BookEdit';
import './BookShow.css';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-container">
        <img alt="Books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      <div className="book-content">
        {content}
        <button className="edit-button" onClick={handleEditClick}><FaEdit /></button>
        <button className="delete-button" onClick={handleDeleteClick}><FaTimes /></button>
      </div>
    </div>
  );
}

export default BookShow;
