import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [triggerSearch, setTriggerSearch] = useState(0)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_URL = 'https://imdb.iamidiotareyoutoo.com/search'

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
        const transformedMovies = data.description.map((movie) => ({
          imdbID: movie['#IMDB_ID'] || movie['#IMG_POSTER'],
          Title: movie['#TITLE'] || 'Untitled',
          Year: movie['#YEAR'] || 'N/A',
          Type: movie['#IMDB_IV']?.toLowerCase().includes('tv') ? 'series' : 'movie',
          Poster: movie['#IMG_POSTER'] || 'N/A',
          Actors: movie['#ACTORS'] || '',
          Rank: movie['#RANK'] || ''
        }))
        
        // Sort by year (latest first) and take only first 4
        const sortedMovies = transformedMovies
          .sort((a, b) => {
            const yearA = parseInt(a.Year) || 0
            const yearB = parseInt(b.Year) || 0
            return yearB - yearA
          })
          .slice(0, 4)
        
        setMovies(sortedMovies)
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
    const loadDefaultMovies = async () => {
      const titles = ['Gladiator', 'Matrix', 'Lord of the Rings', 'Snatch']
      setLoading(true)
      
      try {
        const allMovies = []
        
        for (const title of titles) {
          const response = await fetch(`${API_URL}?q=${encodeURIComponent(title)}`)
          const data = await response.json()
          
          if (data && data.description && data.description.length > 0) {
            const movie = data.description[0]
            allMovies.push({
              imdbID: movie['#IMDB_ID'] || movie['#IMG_POSTER'],
              Title: movie['#TITLE'] || 'Untitled',
              Year: movie['#YEAR'] || 'N/A',
              Type: movie['#IMDB_IV']?.toLowerCase().includes('tv') ? 'series' : 'movie',
              Poster: movie['#IMG_POSTER'] || 'N/A',
              Actors: movie['#ACTORS'] || '',
              Rank: movie['#RANK'] || ''
            })
          }
        }
        
        setMovies(allMovies.slice(0, 4))
        setError('')
      } catch (err) {
        setError('Failed to load movies')
        console.error('Error loading default movies:', err)
      } finally {
        setLoading(false)
      }
    }
    
    loadDefaultMovies()
  }, [])

  // Debounce search term for instant search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      if (searchTerm.trim()) {
        setTriggerSearch(prev => prev + 1)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // Trigger search when triggerSearch changes
  useEffect(() => {
    if (triggerSearch > 0) {
      if (debouncedSearchTerm && debouncedSearchTerm.trim()) {
        searchMovies(debouncedSearchTerm)
      } else {
        setMovies([])
        setError('')
      }
    }
  }, [triggerSearch])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchMovies(searchTerm)
    }
  }

  return (
    <div className="App">
      <Hero 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        movies={movies}
        loading={loading}
        error={error}
      />
    </div>
  )
}

export default App
