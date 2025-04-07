import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(!movies || movies.length === 0) {
        return <p>No movies to display.</p>;
      }
  return (
    <div className=''>
        <div className='px-4'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-auto no-scrollbar'>
            <div className='flex '>
             {movies.map(movie => (
                <MovieCard key={movie.imdbID} Poster={movie.Poster} />
            ))}
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default MovieList