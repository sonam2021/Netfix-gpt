import React from 'react'

const VideoTitle = ({title}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r font-bold'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-lg  rounded-lg hover:bg-opacity-80'><span className='mr-2'>▶</span>Play</button>
            <button className='bg-gray-400 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg ml-4'><span className='mr-2'>ℹ</span> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle