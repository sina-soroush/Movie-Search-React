import { useState, useEffect } from 'react'
import './MovieSearch.css'
import MovieCard from './MovieCard'

const API_URL = 'https://imdb.iamidiotareyoutoo.com/search'

const MovieSearch = ({ searchTerm, triggerSearch }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchMovies = async (title) => {
    if (!title.trim()) {
      setError('Please enter a movie title')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${API_URL}?q=${encodeURIComponent(title)}`)
      const data = await response.json()

      if (data && data.description && data.description.length > 0) {
        // Transform the API response to match our card format
        const transformedMovies = data.description.map((movie) => ({
          imdbID: movie['#IMDB_ID'] || movie['#IMG_POSTER'],
          Title: movie['#TITLE'] || 'Untitled',
          Year: movie['#YEAR'] || 'N/A',
          Type: movie['#IMDB_IV']?.toLowerCase().includes('tv') ? 'series' : 'movie',
          Poster: movie['#IMG_POSTER'] || 'N/A',
          Actors: movie['#ACTORS'] || '',
          Rank: movie['#RANK'] || ''
        }))
        setMovies(transformedMovies)
        setError('')
      } else {
        setMovies([])
        setError('No movies found')
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.')
      setMovies([])
      console.error('Error fetching movies:', err)
    } finally {
      setLoading(false)
    }
  }

  // Load default movies on initial render
  useEffect(() => {
    searchMovies('Avengers')
  }, [])

  // Trigger search when triggerSearch changes
  useEffect(() => {
    if (triggerSearch > 0) {
      if (searchTerm && searchTerm.trim()) {
        searchMovies(searchTerm)
      } else {
        setMovies([])
        setError('')
      }
    }
  }, [triggerSearch, searchTerm])

  return (
    <div className="movie-search-container">
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
