// import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <div className='bg-gray-900'>
      <div className='flex justify-center items-center max-w-4xl min-h-[200px] mx-auto gap-10'>
        <div className='flex'>
          <h1 className='text-white text-3xl mb-10 mt-[50px] uppercase '>Book your appointment here</h1>
        </div>
        <div className='flex'>
          <a href='https://calendar.app.google/MFW8rzHM8LQiGydf8' target='_blank'>
            <button className='bg-purple-700 text-white p-4 rounded-xl hover:bg-purple-500 transition-all hover:scale-105 shadow-xl duration-200'>Book an Appointment</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GetStarted