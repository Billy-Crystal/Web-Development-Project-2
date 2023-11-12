import React, { useState, useEffect } from "react";

function FormRepairDetail({ passDataToParent, passRepairDataToParent }) {
    const [purchaseDate, setPurchaseDate] = useState("");
    const [repairDate, setRepairDate] = useState("");
    const [isPurchaseDateValid, setIsPurchaseDateValid] = useState(true);
    const [isRepairDateValid, setIsRepairDateValid] = useState(true);
    const [isWarrantySelectable, setIsWarrantySelectable] = useState(true);
    const [imei, setImei] = useState("");
    const [make, setMake] = useState("none");
    const [modelNumber, setModelNumber] = useState("");
    const [faultCategory, setFaultCategory] = useState("none");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const warranty =
            isWarrantySelectable && document.getElementById("warranty").checked
                ? "Yes"
                : "No";

        passRepairDataToParent({
            purchaseDate,
            repairDate,
            warranty,
            imei,
            make,
            modelNumber,
            faultCategory,
            description,
        });
    }, [
        purchaseDate,
        repairDate,
        isWarrantySelectable,
        imei,
        make,
        modelNumber,
        faultCategory,
        description,
        passRepairDataToParent,
    ]);

    const handlePurchaseDateChange = (event) => {
        const enteredPurchaseDate = new Date(event.target.value);
        const currentDate = new Date();
        const twoYearsAgo = new Date(currentDate);
        twoYearsAgo.setFullYear(currentDate.getFullYear() - 2);

        if (enteredPurchaseDate > currentDate) {
            setIsPurchaseDateValid(false);
            setIsWarrantySelectable(true);
        } else {
            setIsPurchaseDateValid(true);

            if (enteredPurchaseDate > twoYearsAgo) {
                setIsWarrantySelectable(true);
            } else {
                setIsWarrantySelectable(false);
                passDataToParent(false);
            }

            setPurchaseDate(event.target.value);
        }
    };

    const handleRepairDateChange = (event) => {
        const enteredRepairDate = new Date(event.target.value);
        const currentDate = new Date();

        if (enteredRepairDate < currentDate) {
            setIsRepairDateValid(false);
        } else {
            setIsRepairDateValid(true);
            setRepairDate(event.target.value);
        }
    };

    return (
        <>
            <h2>Repair Details</h2>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Purchase Date *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="purchaseDate"
                    required
                    value={purchaseDate}
                    onChange={handlePurchaseDateChange}
                />
                {!isPurchaseDateValid && (
                    <p className="text-danger">
                        Purchase date cannot be in the future.
                    </p>
                )}
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Repair Date *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="repairDate"
                    required
                    value={repairDate}
                    onChange={handleRepairDateChange}
                />
                {!isRepairDateValid && (
                    <p className="text-danger">
                        Repair date cannot be before today.
                    </p>
                )}
            </div>
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                    <legend className="col-11 float-none w-auto">
                        Under Warranty
                    </legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">
                            Warranty
                        </label>
                        <input
                            type="checkbox"
                            id="warranty"
                            disabled={!isWarrantySelectable}
                            onChange={(event) =>
                                passDataToParent(event.target.checked)
                            }
                        />
                    </div>
                </fieldset>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    IMEI Number: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text" // Change the input type to text
                    id="imei"
                    required
                    maxLength="15" // Set the maximum length to 15 characters
                    pattern="\d{15}" // Use a regular expression to allow only 15 digits
                    title="Please enter a 15-digit number" // Custom validation message
                    value={imei}
                    onChange={(event) => setImei(event.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Make:</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    id="makeList"
                    value={make}
                    onChange={(event) => setMake(event.target.value)}
                >
                    <option value="none">None</option>
                    <option value="iphone">Apple</option>
                    <option value="samsung">LG</option>
                    <option value="nokia">Motorola</option>
                    <option value="nokia">Nokia</option>
                    <option value="nokia">Samsung</option>
                    <option value="nokia">Sony</option>
                    <option value="nokia">Other</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Model Number:
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="modelnumber"
                    value={modelNumber}
                    onChange={(event) => setModelNumber(event.target.value)}
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Fault Category: *
                </label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    id="faultcategory"
                    value={faultCategory}
                    onChange={(event) => setFaultCategory(event.target.value)}
                >
                    <option value="none">None</option>
                    <option value="screen">Battery</option>
                    <option value="battery">Charging</option>
                    <option value="battery">Screen</option>
                    <option value="battery">SD-Storage</option>
                    <option value="battery">Software</option>
                    <option value="battery">Other</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Description: *
                </label>
                <textarea
                    className="col-12 col-md-12 col-lg-7"
                    id="description"
                    required
                    style={{ resize: "vertical", minHeight: "135px" }}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
        </>
    );
}

export default FormRepairDetail;
