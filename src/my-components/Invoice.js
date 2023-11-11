import React from "react";
import { useLocation } from "react-router-dom";

function Invoice() {
    const location = useLocation();
    const { state } = location;

    const customerFormData = state ? state.customerFormData : null;
    const costData = state ? state.costData : null;
    const repairData = state ? state.repairData : null;

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

                    <h3>Cost Details:</h3>
                    <p>Bond Value: {costData.bondValue}</p>
                    <p>Service Fee: {costData.serviceFee}</p>
                    <p>Total Fee: {costData.totalFee}</p>
                    <p>GST: {costData.gst}</p>
                    <p>Total+GST Fee: {costData.totalGstFee}</p>

                    <h3>Repair Details:</h3>
                    <p>Purchase Date: {repairData.purchaseDate}</p>
                    <p>Repair Date: {repairData.repairDate}</p>
                    <p>Under Warranty: {repairData.warranty ? "Yes" : "No"}</p>
                    <p>IMEI Number: {repairData.imei}</p>
                    <p>Make: {repairData.make}</p>
                    <p>Model Number: {repairData.modelNumber}</p>
                    <p>Fault Category: {repairData.faultCategory}</p>
                    <p>Description: {repairData.description}</p>
                    {/* Add other properties as needed */}
                </div>
            ) : (
                <p>No customer data found.</p>
            )}
        </div>
    );
}

export default Invoice;
