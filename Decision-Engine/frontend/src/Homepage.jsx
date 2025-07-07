import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
function Homepage() {
  return (
    <>
    <div className='p-4'>
        <div className= ' flex flex-row bg-blue-700 '>
            <div className='mt-2 ml-5'>
                <img src='images/logoonly.png' alt='Logo'/>
            </div>

            {/* searchbox */}
            <div className="m-4 ml-16">
  <div className="relative">
   
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
      <MagnifyingGlassIcon className="h-5 w-5 text-black" />
    </div>

    <input
      type="text"
      placeholder="Search"
      className="pl-10 pr-4 py-2 rounded-xl bg-white text-black border w-full max-w-md focus:outline-none"
    />
  </div>
</div>

        </div>
      
    </div>
    </>

  )
}

export default Homepage
