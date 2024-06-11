import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    axios.get('https://reactnd-books-api.udacity.com/books', {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => {
      setBooks(response.data.books);
    })
    .catch(error => {
      console.error("Error fetching books:", error);
    });
  }, []);

  const searchedBooks = books.filter(book =>
    book.title.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search Books"
          value={userSearch}
          onChange={event => setUserSearch(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {searchedBooks.map(book => (
          <div key={book.id} className="p-4 bg-white shadow rounded">
            {book.imageLinks?.thumbnail ? (
              <img 
                src={book.imageLinks.thumbnail} 
                alt={book.title} 
                className="w-full h-48 object-cover mb-2" 
                style={{ objectFit: 'contain' }} 
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 mb-2">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-gray-500">by {book.authors.join(', ')}</p>
            <p className="text-red-500 font-bold">Free</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
