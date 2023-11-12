import React, { useState } from "react";

function FormCustomerDetail(props) {
    const [customerType, setCustomerType] = useState("customer");
    const [formData, setFormData] = useState({
        title: "Mr",
        firstName: "",
        lastName: "",
        street: "",
        suburb: "",
        city: "",
        postcode: "",
        phoneNumber: "",
        email: "",
    });

    // Function to handle radio button change and update customer type
    const handleCustomerTypeChange = (event) => {
        const selectedCustomerType = event.target.value;
        setCustomerType(selectedCustomerType);
        props.updateCustomerType(selectedCustomerType);
    };

    // Function to handle form field changes and update form data
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));

        // Pass the updated form data to the parent (Home) component
        props.updateCustomerFormData({
            ...formData,
            [id]: value,
        });
    };

    return (
        <>
            <h2>Customer Details</h2>
            {/* Customer type */}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">
                        Customer type *
                    </legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">
                            Customer
                        </label>
                        <input
                            type="radio"
                            id="customerType"
                            name="customer-type"
                            value="customer"
                            checked={customerType === "customer"}
                            onChange={handleCustomerTypeChange}
                        />
                    </div>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">
                            Business
                        </label>
                        <input
                            type="radio"
                            id="businessType"
                            name="customer-type"
                            value="business"
                            checked={customerType === "business"}
                            onChange={handleCustomerTypeChange}
                        />
                    </div>
                </fieldset>
            </div>

            {/* Details */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Title *</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    First Name *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(event) => {
                        const { id, value } = event.target;
                        const sanitizedValue = value.replace(
                            /[^a-zA-Z\s-]/g,
                            ""
                        );
                        setFormData({ ...formData, [id]: sanitizedValue });
                    }}
                />
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Last Name *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(event) => {
                        const { id, value } = event.target;
                        const sanitizedValue = value.replace(
                            /[^a-zA-Z\s-]/g,
                            ""
                        );
                        setFormData({ ...formData, [id]: sanitizedValue });
                    }}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Street *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="street"
                    required
                    value={formData.street}
                    onChange={handleInputChange}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Suburb</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="suburb"
                    value={formData.suburb}
                    onChange={handleInputChange}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">City *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Post Code</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="postcode"
                    value={formData.postcode}
                    onChange={(event) => {
                        const { id, value } = event.target;
                        // Restrict to 4 digits
                        const sanitizedValue = value
                            .replace(/\D/g, "")
                            .slice(0, 4);
                        setFormData({ ...formData, [id]: sanitizedValue });
                    }}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Phone Number *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={(event) => {
                        const inputValue = event.target.value;
                        const sanitizedValue = inputValue.replace(
                            /[^0-9+() -]/g,
                            ""
                        ); // Remove invalid characters
                        setFormData({
                            ...formData,
                            phoneNumber: sanitizedValue,
                        });
                    }}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Email *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
}

export default FormCustomerDetail;
