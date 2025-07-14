import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

function Analysis() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;
  const confidence = location.state?.confidence;

  // If user has not entered data, show message
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

      <div className="p-8 mb-6">
        <div className="flex lg:flex-row flex-col">
          <p className="text-2xl font-bold">Inventory & Batch Matching :</p>
        </div>

        <div className="mt-4 flex lg:flex-row flex-col">
          <p className="text-xl">Warehouse Location :</p>
          <p className="ml-2 text-xl">Warehouse A</p>
        </div>
        <div className="mt-4 flex lg:flex-row flex-col">
          <p className="text-xl">Dwell Time Saving :</p>
          <p className="ml-2 text-xl">3 days (est).</p>
        </div>
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
