import React from "react";
import { useLocation } from "react-router-dom";

function Invoice() {
    const location = useLocation();
    const { state } = location;

    // Check if state contains customerFormData
    const customerFormData = state ? state.customerFormData : null;

    return (
        <div>
            <h2>Invoice</h2>
            {customerFormData ? (
                <div>
                    <h3>Customer Details:</h3>
                    <p>Title: {customerFormData.title}</p>
                    <p>First Name: {customerFormData.firstName}</p>
                    <p>Last Name: {customerFormData.lastName}</p>
                    <p>Street: {customerFormData.street}</p>
                    <p>Suburb: {customerFormData.suburb}</p>
                    <p>City: {customerFormData.city}</p>
                    <p>Postcode: {customerFormData.postcode}</p>
                    <p>Phone Number: {customerFormData.phoneNumber}</p>
                    <p>Email: {customerFormData.email}</p>
                </div>
            ) : (
                <p>No customer data found.</p>
            )}
        </div>
    );
}

export default Invoice;
