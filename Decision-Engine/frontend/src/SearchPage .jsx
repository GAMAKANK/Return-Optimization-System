import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import data from './data/products.json';   
import { Link } from 'react-router-dom';
function SearchPage () {
  return (
    <>
    <div className='p-4'>
      {/* header */}
        <div className= ' flex flex-row bg-blue-700 '>
            <div className='mt-2 ml-5'>
                <img src='images/logoonly.png' alt='Logo'/>
            </div>

           
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


{/* listings */}
 <div className="ml-10 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <Link
              to={`/dashboard/${product.productId}`}  
              key={product.productId}
              className="flex flex-col justify-between border rounded-lg p-4 h-96 w-80 shadow-md hover:shadow-lg transition"
            >
              <div className="h-40 w-full overflow-hidden flex justify-center items-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="mt-4 text-center bg-blue-800 text-white rounded-lg p-2">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>



    </div>
    </>

  )
}

export default SearchPage 
