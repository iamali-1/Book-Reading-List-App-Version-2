import React from 'react';
import BookShow from "./BookShow";
import './BookList.css';

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
  ));

  return (
    <div className="book-list">
      {renderBooks}
    </div>
  );
}

export default BookList;
