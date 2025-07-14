from flask import Flask, request, jsonify
from flask_cors import CORS
import sys, os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../ml_model')))
from predict import get_prediction

app = Flask(__name__)
CORS(app)  # Fix 403 CORS issues

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        print("Received:", data)
        result, prob = get_prediction(data)
        return jsonify({
            "action": result,
            "confidence": float(prob)
        })

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 400

@app.route("/", methods=["GET"])
def home():
    return "✅ ML API is running"

if __name__ == '__main__':
    app.run(debug=True)
