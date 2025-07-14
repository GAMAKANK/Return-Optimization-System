import pandas as pd
import joblib

df = pd.read_csv("return_data.csv") 

df.drop(columns=["ASIN", "Title", "Thumbnail URL", "Action", "Manufacturing Date"], inplace=True)


df_encoded = pd.get_dummies(df, columns=[
    'Category', 'Reason', 'Condition', 'Customer_type', 'Price_range'
])

expected_columns = df_encoded.columns.tolist()

joblib.dump(expected_columns, "expected_columns.pkl")

print("✅ expected_columns.pkl file created successfully!")
