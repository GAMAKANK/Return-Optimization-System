import os
import joblib
import pandas as pd
from datetime import datetime

model_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../ml_model"))

model_path = os.path.join(os.path.dirname(__file__), "xgb_classifier_model.pkl")
encoder_path = os.path.join(os.path.dirname(__file__), "label_encoder.pkl")
columns_path = os.path.join(os.path.dirname(__file__), "expected_columns.pkl")

model = joblib.load(model_path)
le = joblib.load(encoder_path)
expected_columns = joblib.load(columns_path)

def get_prediction(data: dict):
    try:
        # Convert Manufacturing Date to Product_Age if present
        if "Manufacturing Date" in data:
            del data["Manufacturing Date"]

        # Ensure Product_Age is present
        if "Product_Age" not in data:
            raise ValueError("expected Product_Age in input data")

        df = pd.DataFrame([data])
        df = pd.get_dummies(df)

        # Load expected columns
        all_expected_columns = joblib.load(os.path.join(os.path.dirname(__file__), "expected_columns.pkl"))

        for col in all_expected_columns:
            if col not in df.columns:
                df[col] = 0

        df = df[all_expected_columns]  # Correct column order

        pred_encoded = model.predict(df)[0]
        return le.inverse_transform([pred_encoded])[0]

    except Exception as e:
        raise ValueError(f"Prediction failed: {e}")


