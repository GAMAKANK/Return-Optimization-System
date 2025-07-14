import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
         const response = await fetch('http://localhost:5001/products-with-batches'); // Replace with your API base URL
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run once on mount

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100"> {/* Added light gray background to page */}
      {/* Header */}
      <div className="flex flex-row bg-blue-700">
        <div className="mt-2 ml-5">
          <img src="images/logoonly.png" alt="Logo" />
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

      {/* Listings */}
      <div className="ml-10 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              to={`/dashboard/${product.batchId}`} // Using batchId as the identifier
              key={product.batchId}
              className="flex flex-col justify-between border rounded-lg p-4 h-96 w-80 shadow-md bg-white hover:bg-blue-50 hover:shadow-lg transition" // Added white background and blue hover effect
            >
              <div className="h-40 w-full overflow-hidden flex justify-center items-center">
                <img
                  src={product.product.image} // Accessing image from product object
                  alt={product.product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="mt-4 text-center bg-blue-800 text-white rounded-lg p-2">
                <h3 className="text-lg font-semibold">{product.product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;