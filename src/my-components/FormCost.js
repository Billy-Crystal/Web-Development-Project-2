import React, { useEffect } from "react";

function FormCost(props) {
    const bondValue =
        props.customerType === "business" ? 0 : props.sharedPropBond;
    const serviceFee = props.sharedPropWarranty ? 0 : 85;
    const totalFee = bondValue + serviceFee;
    const gst = (totalFee * 0.1).toFixed(2);
    const totalGstFee = (totalFee + parseFloat(gst)).toFixed(2);

    useEffect(() => {
        const updateCostData = () => {
            const costData = {
                bondValue,
                serviceFee,
                totalFee,
                gst,
                totalGstFee,
            };
            props.passCostDataToParent(costData);
        };

        updateCostData();
    }, [bondValue, serviceFee, totalFee, gst, totalGstFee, props]);

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

export default FormCost;
