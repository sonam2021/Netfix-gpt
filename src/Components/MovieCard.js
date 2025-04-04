import React from 'react'

const MovieCard = ({Poster}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie Card' src={Poster}/>
    </div>
  )
}

export default MovieCard