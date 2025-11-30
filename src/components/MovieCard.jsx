import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  const posterUrl = movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450?text=No+Poster'

  return (
    <div className="movie-card" onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}>
      <div className="card-container">
        <div className="card-front" style={{backgroundImage: `url(${posterUrl})`}}>
          <div className="card-inner">
            {/* Front shows only the poster image */}
          </div>
        </div>
        <div className="card-back">
          <div className="card-inner">
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-year">Year: {movie.Year}</p>
            <span className="movie-type">{movie.Type}</span>
            {movie.Actors && <p className="movie-actors">{movie.Actors}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
