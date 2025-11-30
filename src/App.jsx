import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import MovieSearch from './components/MovieSearch'

function App() {
  return (
    <div className="App">
      <Hero />
      <MovieSearch />
    </div>
  )
}

export default App
