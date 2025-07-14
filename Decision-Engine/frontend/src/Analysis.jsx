import React, { useEffect, useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

function Analysis() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state?.result;
  const confidence = location.state?.confidence;
  const sku = location.state?.sku;
  const batchId = location.state?.batchId;
  const quantityToAdd = location.state?.quantityToAdd || 100;
  const productDetails = location.state?.productDetails;

  const [shelfInfo, setShelfInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShelfInfo = async () => {
      try {
        console.log('Sending inventory assignment request:', { sku, batchId, quantityToAdd });
        
        const res = await fetch('http://localhost:5001/inventory/assign', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sku, batchId, quantityToAdd })
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Received shelf info:', data);
        setShelfInfo(data);
      } catch (err) {
        console.error('Error fetching shelf/warehouse info:', err);
        setError(err.message);
        setShelfInfo(null);
      } finally {
        setLoading(false);
      }
    };

    if (sku && batchId) {
      fetchShelfInfo();
    } else {
      setLoading(false);
      setError('Missing product SKU or batch ID');
    }
  }, [sku, batchId, quantityToAdd]);

  if (!result) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500 font-semibold">
          No analysis data found. Please submit a product first.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-purple-900 text-shadow-md">Analysis</h1>
        </div>
        <div className="mt-8 flex flex-row ms-auto pr-4">
          <div className="flex items-center gap-2 bg-green-100 border border-green-400 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaShieldAlt className="text-green-600 text-xl" />
            <p className="text-lg font-semibold text-green-800 pb-2">
              <span className="font-bold text-2xl">
                {confidence ? `${(confidence * 100).toFixed(1)}%` : "N/A"}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 mb-6 mt-6">
        <div className="flex lg:flex-row flex-col">
          <p className="text-2xl font-bold">Suggested Actions :</p>
          <p className="ml-2 mt-1 text-xl font-semibold">{result}</p>
        </div>
      </div>

      {/* Product Details Section */}
      {productDetails && (
        <div className="p-8 mb-6">
          <div className="flex lg:flex-row flex-col">
            <p className="text-2xl font-bold mb-2">Product Information :</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-lg"><span className="font-semibold">Name:</span> {productDetails.name}</p>
                <p className="text-lg"><span className="font-semibold">Category:</span> {productDetails.category}</p>
                <p className="text-lg"><span className="font-semibold">Price:</span> Rs {productDetails.price}</p>
              </div>
              <div>
                <p className="text-lg"><span className="font-semibold">SKU:</span> {sku}</p>
                <p className="text-lg"><span className="font-semibold">Batch ID:</span> {batchId}</p>
                <p className="text-lg"><span className="font-semibold">Quantity:</span> {productDetails.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 mb-6">
        <div className="flex lg:flex-row flex-col">
          <p className="text-2xl font-bold mb-2">Inventory & Batch Matching :</p>
        </div>

        {loading ? (
          <p className="text-lg text-gray-500">Loading shelf and warehouse data...</p>
        ) : error ? (
          <p className="text-red-500 mt-4">Error: {error}</p>
        ) : shelfInfo && shelfInfo.shelf ? (
          <>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <div className="mt-4 flex lg:flex-row flex-col">
                <p className="text-xl font-semibold">Warehouse Location :</p>
                <p className="ml-2 text-xl">
                  {shelfInfo.warehouse?.address?.city || 'N/A'} ({shelfInfo.warehouse?.warehouseId || 'N/A'})
                </p>
              </div>
              <div className="mt-4 flex lg:flex-row flex-col">
                <p className="text-xl font-semibold">Shelf Number :</p>
                <p className="ml-2 text-xl">{shelfInfo.shelf?.shelfNumber || 'N/A'}</p>
              </div>
              <div className="mt-4 flex lg:flex-row flex-col">
                <p className="text-xl font-semibold">Available Units on Shelf :</p>
                <p className="ml-2 text-xl">{shelfInfo.shelf?.quantity || 0}</p>
              </div>
              <div className="mt-4 flex lg:flex-row flex-col">
                <p className="text-xl font-semibold">Warehouse Contact :</p>
                <p className="ml-2 text-xl">{shelfInfo.warehouse?.contactEmail || 'N/A'}</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✅ {shelfInfo.message || 'Inventory successfully assigned'}
              </p>
            </div>
          </>
        ) : (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">
              ❌ No shelf/warehouse data found. Product may not be available in inventory.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <button
          className="bg-blue-800 text-white font-bold py-3 px-10 rounded-2xl hover:bg-blue-900 transition-all duration-300 shadow-lg"
          onClick={() => navigate('/')}
        >
          Ok
        </button>
      </div>
    </>
  );
}

export default Analysis;