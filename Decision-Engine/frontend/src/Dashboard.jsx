import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './index.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [cols, setCols] = useState(100);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCols(30);
      } else {
        setCols(100);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const product = {
    name: 'Mens Collar T-Shirt | Men Wear, Black, Size: M',
    id: 'sku961237852',
    batchNumber: 'BN-2025-A7',
    price: 'Rs 1200.00',
    imageUrl: '/images/collar-tshirt.png',
  };

  const returnReasonData = {
    labels: ['Wrong Size', 'Defective', 'Changed Mind', 'Other'],
    datasets: [
      {
        label: 'Return Reasons',
        data: [30, 15, 25, 10], 
        backgroundColor: ['#f87171', '#facc15', '#34d399', '#60a5fa'],
        borderWidth: 2,
      },
    ],
  };
 const whiteLabelOptions = {
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
    tooltip: {
      bodyColor: 'white',
      titleColor: 'white',
    },
  },
};
  const salesVsReturnsData = {
    labels: ['Sales', 'Returns'],
    datasets: [
      {
        label: 'Sales vs Returns',
        data: [200, 40], 
        backgroundColor: ['#4ade80', '#f87171'],
        borderWidth: 2,
      },
    ],
  };
  const lightLabelOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: 'black',
      },
    },
    tooltip: {
      bodyColor: 'black',
      titleColor: 'black',
    },
  },
};


  return (
    <>
    <div className="bg-blue-700 pb-8 pt-5 shadow-lg">
        <h1 className="text-center text-3xl text-white font-bold text-shadow">Return Manager</h1>
      </div>
      <div className="p-7 mb-8">
      <h2 className="text-3xl text-purple-900 font-semibold text-shadow mb-4">Information</h2>

  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    
    <div>
      {/* Form */}
      <form>
        <div className="mb-6 mt-6">
          <label className="text-md text-black font-semibold">Return Reason:</label>
          <br/>
          <select
            className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full max-w-xs"
            defaultValue="Other"
          >
            <option>Wrong Size</option>
            <option>Defective</option>
            <option>Changed Mind</option>
            <option>Other</option>
          </select>
          <div className="mt-3">
            <textarea
              rows="7"
              cols={cols}
              className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full max-w-xs lg:max-w-lg"
              placeholder="If Other, please specify"
            ></textarea>
          </div>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row gap-4">
          <div className="w-full max-w-xs">
            <label className="text-md text-black font-semibold">Item Condition:</label>
            <select
              className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
              defaultValue="Damaged"
            >
              <option>Unopened</option>
              <option>Like New</option>
              <option>Used</option>
              <option>Damaged</option>
            </select>
          </div>

          <div className="w-full max-w-xs lg:ml-4">
            <label className="text-md text-black font-semibold">Return Date:</label>
            <input
              type="date"
              required
              className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col lg:flex-row gap-4">
          <div className="w-full max-w-xs">
            <label className="text-md text-black font-semibold">Customer Type:</label>
            <select
              className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
              defaultValue="Other"
            >
              <option>New</option>
              <option>Returning</option>
              <option>Premium</option>
            </select>
          </div>

          <div className="w-full max-w-xs lg:ml-4">
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md mt-6 px-6 py-2 shadow w-full transition-all"
            >
              Analyse
            </button>
          </div>
        </div>
      </form>

      {/* Stats */}
      <h2 className='mt-6 text-3xl text-purple-900 font-semibold text-shadow mb-4'>Statistics</h2>
      <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-700 p-4 rounded-lg shadow-md w-full max-w-sm mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">Sales vs Returns</h3>
          <div className="flex justify-center">
            <div style={{ width: 250, height: 250 }}>
              <Pie data={salesVsReturnsData} options={whiteLabelOptions} />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 text-center">Return Reasons</h3>
          <div className="flex justify-center">
            <div style={{ width: 250, height: 250 }}>
              <Pie data={returnReasonData} />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Product Card */}
    <div className="bg-blue-700 shadow-xl rounded-xl max-w-lg w-full p-6 flex flex-col ms-auto">
 
  <div className="flex justify-center mb-4">
    <img src="/images/walmartLogo.png" alt="logo" className="h-20 w-auto" />
  </div>

  
  <h2 className="text-3xl font-bold text-white mb-6 text-center">Product Details</h2>

  
  <div className="flex justify-center mb-6">
    <img
      src={product.imageUrl}
      alt="Product"
      className="w-full h-64 object-contain bg-white rounded-lg p-2"
    />
  </div>

  
  <h3 className="text-xl font-semibold text-white text-center mb-4 px-4">{product.name}</h3>

 
  <div className="space-y-4">
    <div className="flex flex-col text-sm text-white">
      <label htmlFor="productId" className="mb-1 font-bold">ID:</label>
      <input
        type="text"
        id="productId"
        value={product.id}
        readOnly
        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
      />
    </div>
    <div className="flex flex-col text-sm text-white">
      <label htmlFor="batchNumber" className="mb-1 font-bold">Batch:</label>
      <input
        type="text"
        id="batchNumber"
        value={product.batchNumber}
        readOnly
        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
      />
    </div>
    <div className="flex flex-col text-sm text-white">
      <label htmlFor="price" className="mb-1 font-bold">Price:</label>
      <input
        type="text"
        id="price"
        value={product.price}
        readOnly
        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
      />
    </div>
  </div>

  
  <div className="flex justify-center mt-6 py-10">
    <button className="bg-white text-blue-800 font-bold border-2 border-purple-700 rounded-lg px-8 py-2 hover:bg-gray-100 transition duration-200">
      Scan
    </button>
  </div>
</div>
</div>
</div>

    </>
  );
}

export default Dashboard;
