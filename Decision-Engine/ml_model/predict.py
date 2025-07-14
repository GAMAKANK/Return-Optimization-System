import os
import joblib
import pandas as pd
from datetime import datetime

model_path = os.path.join(os.path.dirname(__file__), "xgb_classifier_model.pkl")
encoder_path = os.path.join(os.path.dirname(__file__), "label_encoder.pkl")
columns_path = os.path.join(os.path.dirname(__file__), "expected_columns.pkl")

model = joblib.load(model_path)
le = joblib.load(encoder_path)
expected_columns = joblib.load(columns_path)

def get_prediction(data: dict):
    try:
        if "Manufacturing Date" in data:
            manu_date = datetime.strptime(data["Manufacturing Date"], "%Y-%m-%d")
            data["Product_Age"] = (datetime.now() - manu_date).days
            del data["Manufacturing Date"]

        if "Price in INR (Extracted Price * 80)" in data:
            price = data["Price in INR (Extracted Price * 80)"]
            if price < 500:
                data["Price_range"] = "Low"
            elif price < 1500:
                data["Price_range"] = "Mid"
            else:
                data["Price_range"] = "High"
            del data["Price in INR (Extracted Price * 80)"]

        # Convert to DataFrame and one-hot encode
        df = pd.DataFrame([data])
        df_encoded = pd.get_dummies(df)

        # Align with expected columns
        for col in expected_columns:
            if col not in df_encoded.columns:
                df_encoded[col] = 0

        df_encoded = df_encoded[expected_columns]

        # Predict
        # Predict
        probs = model.predict_proba(df_encoded)
        pred_encoded = probs.argmax(axis=1)[0]
        confidence = probs[0][pred_encoded]
        action = le.inverse_transform([pred_encoded])[0]
        return action, confidence


    except Exception as e:
        raise ValueError(f"Prediction failed: {e}")
