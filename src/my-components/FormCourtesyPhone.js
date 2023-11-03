import { useState } from "react";

function FormCourtesyPhone({ passDataToParent }) {
    // Courtesy items data
    let courtesyList = [
        { id: 0, type: "none", name: "none", bond: 0 },
        { id: 1, type: "phone", name: "iPhone", bond: 275 },
        { id: 2, type: "phone", name: "Samsung Galaxy", bond: 100 },
        { id: 3, type: "phone", name: "Nokia", bond: 100 },
        { id: 4, type: "charger", name: "iPhone Charger", bond: 30 },
        { id: 5, type: "charger", name: "Samsung Charger", bond: 30 },
        { id: 6, type: "charger", name: "Nokia Charger", bond: 30 },
    ];

    // State variables
    const [phoneBorrow, setPhoneBorrow] = useState(0); // 0 = 'none'
    const [chargerBorrow, setChargerBorrow] = useState(0); // 0 = 'none'

    // Handle phone selection
    const addPhone = (selectedOption) => {
        selectedOption === "none"
            ? setPhoneBorrow(0)
            : setPhoneBorrow(Number(selectedOption));
        //Update totalBond
        let updateId = 0;
        selectedOption === "none"
            ? (updateId = 0)
            : (updateId = Number(selectedOption));
        let updateBond =
            courtesyList.filter((item) => {
                return item.id === updateId;
            })[0].bond +
            courtesyList.filter((item) => {
                return item.id === chargerBorrow;
            })[0].bond;
        //Send data upto Parent by calling callback function "passDataToParent"
        passDataToParent(updateBond); //Child1 (FormCourtesyPhone)
    };

    // Handle charger selection
    const addCharger = (selectedOption) => {
        selectedOption === "none"
            ? setChargerBorrow(0)
            : setChargerBorrow(Number(selectedOption));
        //Update totalBond
        let updateId = 0;
        selectedOption === "none"
            ? (updateId = 0)
            : (updateId = Number(selectedOption));
        let updateBond =
            courtesyList.filter((item) => {
                return item.id === phoneBorrow;
            })[0].bond +
            courtesyList.filter((item) => {
                return item.id === updateId;
            })[0].bond;
        //Send data upto Parent by calling callback function "passDataToParent"
        passDataToParent(updateBond); //Child1 (FormCourtesyPhone)
    };

    return (
        <>
            <h2>Courtesy Phone</h2>
            {/* Phone selection */}
            <h4>Choose a phone: </h4>
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Item Type</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    id="phoneList"
                    onChange={(selected) => addPhone(selected.target.value)}
                >
                    <option value="none" selected>
                        None
                    </option>
                    <option value="1">iPhone</option>
                    <option value="2">Samsung Galaxy</option>
                    <option value="3">Nokia</option>
                </select>
            </div>

            {/* Charger selection */}
            <h4>Choose a charger: </h4>
            <div className="row mt-2 ms-3">
                <label className="col-12 col-md-12 col-lg-4">Item Type</label>
                <select
                    className="col-12 col-md-12 col-lg-7"
                    id="chargerList"
                    onChange={(selected) => addCharger(selected.target.value)}
                >
                    <option value="none" selected>
                        None
                    </option>
                    <option value="4">iPhone Charger</option>
                    <option value="5">Samsung Charger</option>
                    <option value="6">Nokia Charger</option>
                </select>
            </div>

            {/* Table of added Courtesy items */}
            <div className="row mt-2 ms-3 me-3 bg-white">
                <table className="table table-bordered" id="borrowItems">
                    <tbody>
                        {" "}
                        {/* Enclose the <tr> elements within a <tbody> */}
                        <tr>
                            <td
                                style={{
                                    fontWeight: "bold",
                                    verticalAlign: "middle",
                                }}
                            >
                                Item
                            </td>
                            <td
                                style={{
                                    fontWeight: "bold",
                                    verticalAlign: "middle",
                                }}
                            >
                                Cost
                            </td>
                        </tr>
                        {phoneBorrow === 0 ? null : (
                            <tr>
                                <td>
                                    {
                                        courtesyList.filter((item) => {
                                            return item.id === phoneBorrow;
                                        })[0].name
                                    }
                                </td>{" "}
                                <td>
                                    {
                                        courtesyList.filter((item) => {
                                            return item.id === phoneBorrow;
                                        })[0].bond
                                    }
                                </td>
                            </tr>
                        )}
                        {chargerBorrow === 0 ? null : (
                            <tr>
                                <td>
                                    {
                                        courtesyList.filter((item) => {
                                            return item.id === chargerBorrow;
                                        })[0].name
                                    }
                                </td>{" "}
                                <td>
                                    {
                                        courtesyList.filter((item) => {
                                            return item.id === chargerBorrow;
                                        })[0].bond
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FormCourtesyPhone;
