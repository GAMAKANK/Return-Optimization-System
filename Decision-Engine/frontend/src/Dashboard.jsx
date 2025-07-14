import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [reason, setReason] = useState("Other");
    const [condition, setCondition] = useState("Damaged");
    const [manufactureDate, setManufactureDate] = useState("");
    const [price, setPrice] = useState("");
    const [daysSinceOrder, setDaysSinceOrder] = useState("");
    const [customerType, setCustomerType] = useState("New");
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    // State for API data
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5001/products-with-batches');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log("Fetched Products:", data);

                setProducts(data);
                // Set first product as default selected
                if (data.length > 0) {
                    setSelectedProduct(data[0]);
                }
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getPriceRange = (price) => {
        if (price < 500) return "Low";
        else if (price < 1500) return "Mid";
        else return "High";
    };

    const getProductAge = (dateStr) => {
        const manuDate = new Date(dateStr);
        const today = new Date();
        const diffTime = today - manuDate;
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

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

    const returnReasonData = {
        labels: ['Wrong Size', 'Defective', 'Changed Mind', 'Other'],
        datasets: [
            {
                label: 'Return Reasons',
                data: [30, 15, 30, 25],
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
                data: [90, 10],
                backgroundColor: ['#4ade80', '#f87171'],
                borderWidth: 2,
            },
        ],
    };

    const navigate = useNavigate();

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl">Loading products...</div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl text-red-600">Error: {error}</div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-blue-700 pb-8 pt-5 shadow-lg">
                <h1 className="text-center text-3xl text-white font-bold text-shadow">Return Manager</h1>
            </div>
            <div className="p-7 mb-8">
                <h2 className="text-3xl text-purple-900 font-semibold text-shadow mb-4">Information</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        {/* Product Selection Dropdown */}
                        <div className="mb-6">
                            <label className="text-md text-black font-semibold">Select Product:</label>
                            <select
                                className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full max-w-xs"
                                value={selectedProduct?.batchId || ''}
                                onChange={(e) => {
                                    const product = products.find(p => p.batchId === e.target.value);
                                    setSelectedProduct(product);
                                }}
                            >
                                <option value="">Select a product</option>
                                {products.map((product) => (
                                    <option key={product.batchId} value={product.batchId}>
                                        {product.product.name} - Batch: {product.batchId}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Form */}
                        <form>
                            <div className="mb-6 mt-6">
                                <label className="text-md text-black font-semibold">Return Reason:</label>
                                <br/>
                                <select
                                    className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full max-w-xs"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
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
                                        value={condition}
                                        onChange={(e) => setCondition(e.target.value)}
                                    >
                                        <option>Unopened</option>
                                        <option>Like New</option>
                                        <option>Used</option>
                                        <option>Damaged</option>
                                    </select>
                                </div>

                                <div className="w-full max-w-xs lg:ml-4">
                                    <label className="text-md text-black font-semibold">Manufacturing Date:</label>
                                    <input
                                        type="date"
                                        required
                                        className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
                                        value={manufactureDate}
                                        onChange={(e) => setManufactureDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-6 flex flex-col lg:flex-row gap-4">
                                <div className="w-full max-w-xs">
                                    <label className="text-md text-black font-semibold">Price:</label>
                                    <input
                                        type="number"
                                        required
                                        className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="w-full max-w-xs lg:ml-4">
                                    <label className="text-md text-black font-semibold">Days Since Order</label>
                                    <input
                                        type="number"
                                        required
                                        className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
                                        value={daysSinceOrder}
                                        onChange={(e) => setDaysSinceOrder(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-6 flex flex-col lg:flex-row gap-4">
                                <div className="w-full max-w-xs">
                                    <label className="text-md text-black font-semibold">Customer Type:</label>
                                    <select
                                        className="border-2 border-blue-400 rounded-md mt-2 px-2 py-1 w-full"
                                        value={customerType}
                                        onChange={(e) => setCustomerType(e.target.value)}
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
                                onClick={async () => {
                                  if (!selectedProduct) {
                                    alert("Please select a product");
                                    return;
                                  }
                                  if (!price || !manufactureDate || !daysSinceOrder) {
                                    alert("Please fill all fields");
                                    return;
                                  }

                                  const requestBody = {
                                    Category: selectedProduct.product.category,
                                    Reason: reason,
                                    Condition: condition,
                                    Days_since_order: parseInt(daysSinceOrder),
                                    Customer_type: customerType,
                                    Product_Age: getProductAge(manufactureDate),
                                    Price_range: getPriceRange(parseInt(price))
                                  };

                                  try {
                                    const res = await fetch("http://127.0.0.1:5000/predict", {
                                      method: "POST",
                                      headers: { "Content-Type": "application/json" },
                                      body: JSON.stringify(requestBody)
                                    });

                                    const result = await res.json();
                                    
                                    // Navigate to analysis with additional product information
                                    navigate('/analysis', { 
                                      state: { 
                                        result: result.action, 
                                        confidence: result.confidence,
                                        // Add these for inventory assignment
                                        sku: selectedProduct.product.sku,
                                        batchId: selectedProduct.batchId,
                                        quantityToAdd: parseInt(price) > 1000 ? 200 : 100, // Example logic
                                        // Additional product details for display
                                        productDetails: {
                                          name: selectedProduct.product.name,
                                          category: selectedProduct.product.category,
                                          price: selectedProduct.product.price,
                                          manufacturingDate: selectedProduct.manufacturingDate,
                                          expiryDate: selectedProduct.expiryDate,
                                          quantity: selectedProduct.quantity
                                        }
                                      } 
                                    });

                                  } catch (error) {
                                    console.error("Prediction Error:", error);
                                    alert("Error making prediction. Please try again.");
                                  }
                                }}
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

                    {/* Product Card - Shows selected product */}
                    {selectedProduct && (
                        <div className="bg-blue-700 shadow-xl rounded-xl max-w-lg w-full p-6 flex flex-col ms-auto">
                            <div className="flex justify-center mb-4">
                                <img src="/images/walmartLogo.png" alt="logo" className="h-20 w-auto" />
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-6 text-center">Product Details</h2>

                            <div className="flex justify-center mb-6">
                                <img
                                    src={selectedProduct.product.image || '/images/default-product.png'}
                                    alt={selectedProduct.product.name}
                                    className="w-full h-64 object-contain bg-white rounded-lg p-2"
                                    onError={(e) => {
                                        e.target.src = '/images/default-product.png';
                                    }}
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-white text-center mb-4 px-4">
                                {selectedProduct.product.name}
                            </h3>

                            <div className="space-y-4">
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">SKU:</label>
                                    <input
                                        type="text"
                                        value={selectedProduct.product.sku || 'N/A'}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">Batch ID:</label>
                                    <input
                                        type="text"
                                        value={selectedProduct.batchId}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">Price:</label>
                                    <input
                                        type="text"
                                        value={`Rs ${selectedProduct.product.price || 0}.00`}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">Category:</label>
                                    <input
                                        type="text"
                                        value={selectedProduct.product.category || 'N/A'}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">Quantity:</label>
                                    <input
                                        type="text"
                                        value={selectedProduct.quantity || 0}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">Manufacturing Date:</label>
                                    <input
                                        type="text"
                                        value={new Date(selectedProduct.manufacturingDate).toLocaleDateString()}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                                <div className="flex flex-col text-sm text-white">
                                    <label className="mb-1 font-bold">Expiry Date:</label>
                                    <input
                                        type="text"
                                        value={new Date(selectedProduct.expiryDate).toLocaleDateString()}
                                        readOnly
                                        className="bg-white text-black border border-purple-700 rounded px-3 py-2"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center mt-6 py-10">
                                <button className="bg-white text-blue-800 font-bold border-2 border-purple-700 rounded-lg px-8 py-2">
                                    Scan
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Products Grid - Show all products */}
                <div className="mt-10">
                    <h2 className="text-3xl text-purple-900 font-semibold text-shadow mb-4">All Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.batchId} className="bg-white shadow-lg rounded-lg p-4 border">
                                <div className="flex justify-center mb-3">
                                    <img
                                        src={product.product.image || '/images/default-product.png'}
                                        alt={product.product.name}
                                        className="w-full h-48 object-contain"
                                        onError={(e) => {
                                            e.target.src = '/images/default-product.png';
                                        }}
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.product.name}</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p><strong>SKU:</strong> {product.product.sku}</p>
                                    <p><strong>Batch:</strong> {product.batchId}</p>
                                    <p><strong>Price:</strong> Rs {product.product.price}.00</p>
                                    <p><strong>Category:</strong> {product.product.category}</p>
                                    <p><strong>Quantity:</strong> {product.quantity}</p>
                                    <p><strong>Mfg Date:</strong> {new Date(product.manufacturingDate).toLocaleDateString()}</p>
                                    <p><strong>Exp Date:</strong> {new Date(product.expiryDate).toLocaleDateString()}</p>
                                </div>
                                <button
                                    className="mt-3 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition-colors"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    Select for Analysis
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;