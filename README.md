# 🧠 Smart Return Management System

An intelligent end-to-end return management solution integrating machine learning, warehouse logistics, and real-time dashboards to optimize reverse supply chain operations.

## 🚀 Features

### ✅ ML Decision Engine (⁠ decision-engine/ml_model ⁠)
•⁠  ⁠Predicts the optimal action for returned items: ⁠ Restock ⁠, ⁠ Repurpose ⁠, ⁠ Recycle ⁠, or ⁠ Reship ⁠.
•⁠  ⁠Factors in:
  - Return reason
  - Item condition
  - Customer type
  - Price range
  - Product age
  - Days since order

### ✅ Admin Dashboard (⁠ decision-engine/frontend ⁠)
•⁠  ⁠Built with *React* and *Chart.js*
•⁠  ⁠Submit return request and visualize decision outcome
•⁠  ⁠Real-time analytics on:
  - Return reasons
  - Sales vs Returns
  - Product insights
•⁠  ⁠Figma design: https://www.figma.com/design/6pAoWvj0xWO6Ip5IJHe8M1/Walmart.co?node-id=0-1&t=99VxG9EVceOvZPVQ-1

### ✅ ML API (⁠ decision-engine/ml_api ⁠)
•⁠  ⁠Flask-based REST API
•⁠  ⁠⁠ /predict ⁠ route returns:
  - Suggested action
  - Confidence score
•⁠  ⁠Handles preprocessing, encoding, and model inference

### ✅ Infra-Orchestration APIs (⁠ Infra-Orchestration/api_services ⁠)
•⁠  ⁠Built with *Node.js* & *Express*
•⁠  ⁠Key APIs:
  - Assign returns to appropriate *batches*
  - Predict the nearest *warehouse* for restocking
  - Connects with inventory, product, shelf, and warehouse models

## 🏗️ Folder Structure


.
├── decision-engine
│   ├── frontend             # React dashboard
│   ├── ml_api               # Flask ML API
│   └── ml_model             # Trained model, encoders, utilities
├── Infra-Orchestration
│   └── api_services
│       ├── models           # Mongoose models for warehouse ops
│       ├── routes           # Main routing and controller logic
│       └── app.js           # Entry point for Node.js server


## 🔁 Workflow

1.⁠ ⁠User selects a product return in the dashboard
2.⁠ ⁠Data is sent to the ML Flask API for prediction
3.⁠ ⁠Suggested action + confidence are returned and displayed
4.⁠ ⁠Based on result:
   - If *Restock*, an API fetches best warehouse and assigns batch
   - Inventory and batch planning system is updated
   - Warehouse is notified

## 🛠️ Tech Stack

•⁠  ⁠*Frontend*: React, TailwindCSS, Chart.js
•⁠  ⁠*Backend*: Node.js, Express, Mongoose
•⁠  ⁠*ML API*: Python, Flask, XGBoost
•⁠  ⁠*Database*: MongoDB
•⁠  ⁠*ML Tools*: Pandas, Scikit-learn, Joblib

## 📦 Setup Instructions

### Prerequisites
•⁠  ⁠Node.js
•⁠  ⁠Python 3.9+
•⁠  ⁠MongoDB
•⁠  ⁠⁠ pip ⁠, ⁠ npm ⁠, ⁠ virtualenv ⁠

### ML API
⁠ bash
cd decision-engine/ml_api
pip install -r requirements.txt
python app.py
 ⁠

### Frontend
⁠ bash
cd decision-engine/frontend
npm install
npm run dev
 ⁠

### Node.js Infra API
⁠ bash
cd Infra-Orchestration/api_services
npm install
node app.js
 ⁠

## 📈 Future Improvements
•⁠  ⁠Auto-suggestion for best shelf inside the warehouse
•⁠  ⁠Time-based learning (feedback loop)
•⁠  ⁠Integration with external ERP systems

## 🤝 Contributors

•⁠  ⁠*Akanksha Nigam*  
•⁠  ⁠*Tanay, **Deepak, **Saniya*  
Team: *Hack Buffs*

## 🏁 Conclusion

A seamless and intelligent return workflow that saves operational cost, improves warehouse logistics, and empowers decision-making via smart automation.
 ye dekho ek bar readme