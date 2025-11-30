import React from 'react'
import './Hero.css'
import MovieCard from './MovieCard'

const Hero = ({ searchTerm, setSearchTerm, onSearch, movies, loading, error }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    // Trigger instant search after a short delay
    if (e.target.value.trim()) {
      onSearch()
    }
  }

  return (
    <div className="hero">
      <div className="hero-background"></div>
      <h1 className="hero-title">Movie Search</h1>
      <h3 className="hero-subtitle">Discover your favorite movies</h3>
      <div className="hero-content">
        <div className="hero-search-form">
          <div className="search-field">
            <input
              type="text"
              placeholder="Search for movies..."
              value={searchTerm}
              onChange={handleChange}
              className="hero-search-input"
            />
            <div className="search-line"></div>
          </div>
        </div>
      </div>

      <div className="movie-results-section">
        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.length > 0 ? (
              movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
            ) : (
              !error && <p className="no-results">Start searching for movies!</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
