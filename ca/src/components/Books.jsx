import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [userSearch, serUserSearch] = useState('');

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

  const searchedBooks = books.filter(query =>
    query.title.toLowerCase().includes(userSearch.toLowerCase())
);


  return (
    <div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search Books"
          value={userSearch}
          onChange={event => serUserSearch(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {searchedBooks.map(item => (
          <div key={item.id} className="p-4 bg-white shadow rounded">
            <img src={item.imageLinks.thumbnail} alt={item.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-gray-500">by {item.authors.join(', ')}</p>
            <p className="text-red-500 font-bold">Free</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
