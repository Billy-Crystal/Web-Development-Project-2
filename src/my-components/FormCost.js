import React from "react";

// Function Component
function FormCost(props) {
    // Calculate bond value based on customer type
    const bondValue =
        props.customerType === "business" ? 0 : props.sharedPropBond;

    // Calculate service fee based on warranty status
    const serviceFee = props.sharedPropWarranty ? 0 : 85;

    // Calculate total fee, GST, and total with GST
    const totalFee = bondValue + serviceFee;
    const gst = (totalFee * 0.1).toFixed(2); // Assuming GST is 10%
    const totalGstFee = (totalFee + parseFloat(gst)).toFixed(2);

    // Component UI: HTML Rendering
    return (
        <>
            <h2>Cost</h2>
            <div className="row mt-2  ms-3">
                <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="bond"
                    value={bondValue}
                    readOnly
                />
            </div>
            <div className="row mt-1  ms-3">
                <label className="col-12 col-md-12 col-lg-4">
                    Service Fee ($)
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="serviceFee"
                    value={serviceFee}
                    readOnly
                />
            </div>
            <div className="row mt-1  ms-3">
                <label className="col-12 col-md-12 col-lg-4">Total ($)</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="totalFee"
                    value={totalFee.toFixed(2)}
                    readOnly
                />
            </div>
            <div className="row mt-1  ms-3">
                <label className="col-12 col-md-12 col-lg-4">GST ($)</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="gst"
                    value={gst}
                    readOnly
                />
            </div>
            <div className="row mt-1  ms-3">
                <label className="col-12 col-md-12 col-lg-4">
                    Total+GST ($)
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="totalGstFee"
                    value={totalGstFee}
                    readOnly
                />
            </div>
        </>
    );
}

// Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;
