import { useState, useEffect } from 'react'
import './MovieSearch.css'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com'

const MovieSearch = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const apiKey = import.meta.env.VITE_OMDB_API_KEY

  const searchMovies = async (title) => {
    if (!title.trim()) {
      setError('Please enter a movie title')
      return
    }

    if (!apiKey || apiKey === 'your_api_key_here') {
      setError('Please configure your OMDB API key in .env file')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${API_URL}?apikey=${apiKey}&s=${title}`)
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search)
        setError('')
      } else {
        setMovies([])
        setError(data.Error || 'No movies found')
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.')
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies(searchTerm)
  }

  // Load some default movies on initial render
  useEffect(() => {
    if (apiKey && apiKey !== 'your_api_key_here') {
      searchMovies('Marvel')
    }
  }, [])

  return (
    <div className="movie-search-container">
      <div className="search-section">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

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
  )
}

export default MovieSearch
