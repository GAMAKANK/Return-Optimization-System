import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../ml_model')))
from flask import Flask, request, jsonify
from flask_cors import CORS #for 403 error
from predict import get_prediction

app = Flask(__name__)
CORS(app) #giving access

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        print("Received Data:", data)  # Add this
        result = get_prediction(data)
        return jsonify({"action": result})
    except Exception as e:
        print("Error:", e)  # Add this
        return jsonify({"error": str(e)}), 400


@app.route("/", methods=["GET"])
def home():
    return "✅ ML API is running"

if __name__ == '__main__':
    app.run(debug=True)
