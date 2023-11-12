import React from "react";
import { useLocation } from "react-router-dom";

function Invoice() {
    const location = useLocation();
    const { state } = location;

    const customerFormData = state ? state.customerFormData : {};
    const costData = state ? state.costData : {};
    const repairData = state ? state.repairData : {};

    return (
        <div className="container-fluid">
            <div className="row bg-secondary">
                <div className="col-6">
                    <h1>Repair Booking</h1>
                </div>
                <div className="col-6">
                    <h4>Amount Due:</h4>
                    <p>{costData.totalGstFee}</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div>
                            <h2>
                                <br></br>
                                Customer<br></br>
                                <br></br>
                            </h2>
                        </div>
                        <div>
                            {customerFormData.title}{" "}
                            {customerFormData.firstName}{" "}
                            {customerFormData.lastName}
                        </div>
                        <div>{customerFormData.street}</div>
                        <div>
                            {customerFormData.suburb}, {customerFormData.city}{" "}
                            {customerFormData.postcode}
                        </div>
                        <div>{customerFormData.phoneNumber}</div>
                        <div>{customerFormData.email}</div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h2>
                                <br></br>
                                Repair Job<br></br>
                                <br></br>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div>{customerFormData.email}</div>
                                <div>{customerFormData.email}</div>
                            </div>
                            <div className="col-6">
                                <div>{customerFormData.email}</div>
                                <div>{customerFormData.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="container-fluid">
                <div className="p-4">
                    <div>
                        <h2>Repair Details</h2>
                    </div>
                    <div>Purchase Date: {repairData.purchaseDate}</div>
                    <div>Repair Date: {repairData.repairDate}</div>
                    <div>Under Warranty: {repairData.warranty}</div>
                </div>
                <div className="p-4">
                    <div>
                        <h3>Courtesy Loan Device Details:</h3>
                    </div>
                    <div>
                        <p>Purchase Date: </p>
                    </div>
                    <div>
                        <p>Repair Date: {repairData.repairDate}</p>
                    </div>
                    <div>
                        <h2>Total:</h2>
                    </div>
                    <div>
                        <p>{costData.totalGstFee}</p>
                    </div>
                </div>
            </div>
            <div className="bg-light p-4"></div>

            <div className="bg-light p-4 text-center">
                <div>
                    <p>27, Mid Lodge 234</p>
                </div>
                <div>
                    <p>Carmel, Indiana 1234</p>
                </div>
                <div>
                    <p>Phone: 765-4321</p>
                </div>
                <div>
                    <p>Thank you for your business!</p>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
