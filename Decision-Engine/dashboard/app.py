import streamlit as st
from datetime import datetime
import pickle
import numpy as np
import os

st.set_page_config(page_title="Return Optimization Dashboard", layout="wide", page_icon="🔄")

# Load model
model_path = os.path.join("..", "ml_model", "final_model.pkl")
with open(model_path, "rb") as f:
    model = pickle.load(f)

# Define mapping 
reason_map = {"Wrong Size": 1, "Defective": 0, "Changed Mind": 3, "Other": 2}
condition_map = {"Unopened": 0, "Like New": 1, "Used": 2, "Damaged": 3}
customer_type_map = {"New": 0, "Returning": 1, "VIP": 2}
action_map_reverse = {0: "Restock", 1: "Repurpose", 2: "Recycle", 3: "Reship"}

# Mock batch data 
batch_data = [
    {"batch_id": "BatchD123", "sku": "SKU123", "demand": 20, "delivery_date": "2025-06-24"},
    {"batch_id": "BatchD567", "sku": "SKU123", "demand": 15, "delivery_date": "2025-06-23"},
    {"batch_id": "BatchE001", "sku": "SKU999", "demand": 5, "delivery_date": "2025-06-30"},
]

# Sidebar Inputs
st.sidebar.title("Return Manager")
sku_id = st.sidebar.text_input("Enter SKU ID", "SKU123")
return_reason = st.sidebar.selectbox("Return Reason", ["Wrong Size", "Defective", "Changed Mind", "Other"])
item_condition = st.sidebar.selectbox("Item Condition", ["Unopened", "Like New", "Used", "Damaged"])
days_since_order = st.sidebar.number_input("Days Since Order", min_value=0, max_value=180, value=10)
customer_type = st.sidebar.selectbox("Customer Type", ["New", "Returning", "VIP"])
price_range = st.sidebar.slider("Price Range", 0, 10000, step=100)

#on clicking the submit buttom storing it in session state
if "submitted" not in st.session_state:
    st.session_state.submitted = False

if st.sidebar.button("Analyze Return ->"):
    st.session_state.submitted = True


# Main Section
st.title("Return Optimization Dashboard")

st.subheader("Return Insights")
st.markdown(f"""
- *SKU ID*: {sku_id}
- *Return Reason*: {return_reason}
- *Item Condition*: {item_condition}
- *Days Since Order*: {days_since_order}
- *Customer Type*: {customer_type}
- *Price Range*: {price_range}
""")

if st.session_state.submitted:

    st.subheader("Analysis Results")

    input_data = [
        reason_map[return_reason],
        condition_map[item_condition],
        days_since_order,
        customer_type_map[customer_type],
        0 if price_range < 3000 else 1 if price_range < 7000 else 2
    ]

    try:
        prediction = model.predict([input_data])[0]
        confidence = model.predict_proba([input_data]).max()
        action = action_map_reverse[prediction]
    except Exception as e:
        st.error(f"Prediction failed: {e}")
        st.stop()

    timestamp = datetime.today().strftime('%Y-%m-%d %H:%M:%S')

    st.subheader("Decision Engine Suggestion")
    st.success(f"Suggested Action: *{action}*")
    st.info(f"🔐 Confidence: {confidence * 100:.2f}%")

    # --- Reasoning Logic ---
    reasons = []
    if item_condition in ["Like New", "Unopened"]:
        reasons.append("item is in excellent condition")
    elif item_condition == "Used":
        reasons.append("item is usable but slightly worn")
    else:
        reasons.append("item may not be resellable")

    if customer_type == "Returning":
        reasons.append("repeat customer")
    elif customer_type == "New":
        reasons.append("new customer")

    if price_range > 7000:
        reasons.append("high-value item")
    elif price_range < 1000:
        reasons.append("low-value item")

    if days_since_order < 7:
        reasons.append("recent return")
    elif days_since_order > 30:
        reasons.append("delayed return")

    reasoning_text = " + ".join(reasons)
    st.markdown(f"- *Reasoning*: {reasoning_text}")

    # --- Batch Assignment ---
    if action == "Restock":
        matching_batches = [b for b in batch_data if b["sku"] == sku_id]
        if matching_batches:
            matching_batches.sort(key=lambda x: x["delivery_date"])
            selected_batch = matching_batches[0]
            batch_id = selected_batch["batch_id"]
            warehouse = "Warehouse A"
        else:
            batch_id = "N/A"
            warehouse = "Not Available"

        st.subheader("Inventory & Batch Matching")
        st.markdown(f"""
        - *Assigned Batch*: **{batch_id}**
        - *Warehouse Location*: **{warehouse}**
        - *Dwell Time Savings*: 3 days (est.)
        """)

        # Use SKU-based key for session state
        session_key = f"assigned_{sku_id}"
        if session_key not in st.session_state:
            st.session_state[session_key] = False

        if not st.session_state[session_key]:
            if st.button("Assign to Batch & Notify Warehouse"):
                st.session_state[session_key] = True
                st.success(f"✅ Assigned to {batch_id} and warehouse notified.")
        else:
            st.success(f"✅ Already assigned to {batch_id} and warehouse notified.")
    else:
        st.warning("ℹ️ No batch assignment needed for this action.")
else:
    st.info("Enter SKU details and click 'Analyze Return' to get started.")

# Footer
st.markdown("---")
st.markdown("© 2025 Return Optimization System")
