import React, { useState, useEffect } from "react";
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  useEffect(( )=> {
    fetchBooks();
  } ,[])

  const editBookById = async (id, newTitle) => {
  const response =  await axios.put(`http://localhost:3001/books/${id}`, {
      title:newTitle
    })
    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
     await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

    const createBook = async (title) => {
      const response = await axios.post('http://localhost:3001/books',{
        title,
      });
    const updatedBooks =[...books, response.data];
    setBooks(updatedBooks);
    
  };

  return (
    <>
        <h1>Reading List</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </>
  );
}

export default App;
