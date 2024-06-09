import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Books from './components/Books';
import RegisterPage from './components/RegisterPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow flex justify-between items-center px-4 py-4">
          <div className="flex items-center">
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" className="w-14 h-auto mr-2" />
            <h1 className="text-2xl font-bold text-gray-900 ml-3 underline decoration-solid">Kalvium Books</h1>
          </div>
          <div>
            <Link to="/register" className="px-4 py-2 bg-red-500 text-white rounded">Register</Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-4">
          <Routes>
            <Route exact path="/" element={<Books />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
