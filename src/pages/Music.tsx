import React from 'react';
import './Music.css';

const favoriteGenres = ["Rock", "Jazz", "Afrobeats", "Soul", "Folk"];
const favoriteAlbums = [
  { title: "Voulez-Vous", artist: "ABBA", imgSrc: "https://i.imgur.com/Nvc7RyC.jpeg" },
  { title: "Still Crazy After All These Years", artist: "Paul Simon", imgSrc: "https://i.imgur.com/KaueYOh.jpeg" },
  { title: "Teatro Lúcido", artist: "La Feeme", imgSrc: "https://i.imgur.com/JgFcOjB.jpeg" },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Without music, life would be a blank to me.”</p>
      </div>

      <div className="genre-section">
        <h3>My Favorite Genres</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
