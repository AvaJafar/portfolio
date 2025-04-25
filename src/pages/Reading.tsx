// Reading.tsx

import React from 'react';
import './Reading.css';

const books = [
  {
    title: "Building a StoryBrand",
    author: "Donald Miller",
    imgSrc: "https://i.imgur.com/Y2DDKoY.png",
    description: "Clarify your message—because if it isn’t clear, it’s invisible.",
  },
  {
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    imgSrc: "https://i.imgur.com/rKDlGZi.png",
    description: "Trust your intuition and let flow lead the way. Create to keep creating.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: "https://i.imgur.com/t1TTngO.png",
    description: "A fable for anyone chasing purpose.",
  },
  {
    title: "Poems of Hafez",
    author: "Hafez",
    imgSrc: "https://i.imgur.com/gVaK33V.jpeg",
    description: "The Persian language is so rich, and his poems feel like mirrors.",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    imgSrc: "https://i.imgur.com/30hLjYH.jpeg",
    description: "Holds a special place in my heart.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Influential Reads</h2>
      <p className="reading-intro">
        Here are a couple of books that have challenged my thinking and shaped my approach to life.
      </p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
