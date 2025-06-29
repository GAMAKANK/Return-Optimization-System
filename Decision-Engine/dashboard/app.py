import streamlit as st
from datetime import datetime

st.set_page_config(page_title="Return Optimization Dashboard", layout="wide" , page_icon="🔄")

st.markdown("""
    <style>
    /* Style only selectbox in the sidebar */
    section[data-testid="stSidebar"] select {
        background-color: #f5c542 !important; /* Light yellow */
        color: black !important;
        border-radius: 5px;
        padding: 4px;
    }
    </style>
    """, unsafe_allow_html=True)

st.sidebar.title("Return Manager")
sku_id = st.sidebar.text_input("Enter SKU ID", "SKU123")
return_reason = st.sidebar.selectbox("Return Reason", ["Wrong Size", "Defective", "Changed Mind", "Other"])
item_condition = st.sidebar.selectbox("Item Condition", ["Like New", "Used", "Damaged", "Unopened"])
days_since_order = st.sidebar.number_input("Days Since Order", min_value=0, max_value=180, value=10)
customer_type = st.sidebar.selectbox("Customer Type", ["New", "Returning", "VIP"])
price_range = st.sidebar.slider("Price Range", 0, 10000, step=100)

submit_button = st.sidebar.button("Analyze Return ->")

# Main Page
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

if submit_button:
    st.subheader("Analysis Results")
    
    decision = "Restock/Resell/ Repackage/ Donate"
    confidence = 0.92
    batch_id = "BatchD567/2025"
    warehouse = "Warehouse A"
    timestamp = datetime.today().strftime('%Y-%m-%d %H:%M:%S')

    st.subheader("Decision Engine Suggestion")
    st.success(f"Suggested Action: *{decision}*")
    st.markdown(f"- *Confidence Score*: {confidence * 100:.1f}%")
    st.markdown(f"- *Reasoning*: High demand + Like new condition + {customer_type} customer")

    st.subheader("Inventory & Batch Matching")
    st.markdown(f"""
    - *Assigned Batch*: {batch_id}
    - *Warehouse Location*: {warehouse}
    - *Dwell Time Savings*: 3 days (est.)
    """)

    st.subheader("Timestamp & Status")
    st.markdown(f"""
    - *Timestamp*: {timestamp}
    - *Status*: Assigned and Notification Sent
    """)

    
    if "assigned" not in st.session_state:
        st.session_state.assigned = False

    if not st.session_state.assigned:
        if st.button("Assign to Batch & Notify Warehouse"):
            st.session_state.assigned = True
            st.success(f"Assigned to {batch_id} and warehouse notified.")
    else:
        st.success(f"Already assigned to {batch_id} and warehouse notified.")

else:
    st.info("Enter SKU details and click 'Analyze Return' to get started.")


   

# Footer
st.markdown("---")
st.markdown("© 2025 Return Optimization System")