import React from "react";
//Function Component
function FormCost(props) {
    const bondValue = props.sharedPropWarranty
        ? 0
        : props.customerType === "business"
        ? 0
        : props.sharedPropBond;
    //Component UI: HTML Rendering
    return (
        <>
            <h2>Cost</h2>
            <div class="row mt-2  ms-3">
                <label class="col-12 col-md-12 col-lg-4">Bond ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="bond"
                    value={bondValue}
                    readonly
                />
            </div>
            <div class="row mt-1  ms-3">
                <label class="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="serviceFee"
                    value={props.sharedPropWarranty ? 0 : 85}
                    readonly
                />
            </div>
            <div class="row mt-1  ms-3">
                <label class="col-12 col-md-12 col-lg-4">Total ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="totalFee"
                    value="0.00"
                    readonly
                />
            </div>
            <div class="row mt-1  ms-3">
                <label class="col-12 col-md-12 col-lg-4">GST ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="gst"
                    value="0.00"
                    readonly
                />
            </div>
            <div class="row mt-1  ms-3">
                <label class="col-12 col-md-12 col-lg-4">Total+GST ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="totalGstFee"
                    value="0.00"
                    readonly
                />
            </div>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;
