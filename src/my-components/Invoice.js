import React from "react";
import { useLocation } from "react-router-dom";

function Invoice() {
    const location = useLocation();
    const { state } = location;
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Months are 0-based in JavaScript
    let year = currentDate.getFullYear();

    let currentDueDate = new Date();
    let dueDay = currentDueDate.getDate() + 7;
    let dueMonth = currentDueDate.getMonth() + 1; // Months are 0-based in JavaScript
    let dueYear = currentDueDate.getFullYear();

    const customerFormData = state ? state.customerFormData : {};
    const costData = state ? state.costData : {};
    const repairData = state ? state.repairData : {};

    return (
        <div className="container-fluid">
            <div className="row bg-secondary">
                <div className="col-9">
                    <h1>Repair Booking</h1>
                </div>
                <div className="col-3">
                    <h4>Amount Due:</h4>
                    <h2>
                        <b>${costData.totalGstFee}</b>
                    </h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
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
                    <div className="col-4">
                        <div>
                            <h2>
                                <br></br>
                                Repair Job<br></br>
                                <br></br>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div>Invoice Date:</div>
                                <div>Payment Due:</div>
                            </div>
                            <div className="col-6">
                                <div>
                                    {year}-{month}-{day}
                                </div>
                                <div>
                                    {dueYear}-{dueMonth}-{dueDay}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h2>Repair Details</h2>
                        </div>
                        <div>
                            <b>Purchase Date:</b> {repairData.purchaseDate}
                        </div>
                        <div>
                            <b>Repair Date:</b> {repairData.repairDate}
                        </div>
                        <div>
                            <b>Under Warranty:</b> {repairData.warranty}
                        </div>
                        <div>
                            <b>IMEI Number:</b> {repairData.imei}
                        </div>
                        <div>
                            <b>Device Make:</b> {repairData.make}
                        </div>
                        <div>
                            <b>Model Number:</b> {repairData.modelNumber}
                        </div>
                        <div>
                            <b>Fault Category:</b> {repairData.faultCategory}
                        </div>
                        <div>
                            <b>Description:</b> {repairData.description}
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <br></br>
                            <h3>Courtesy Loan Cost:</h3>
                        </div>

                        <div>
                            <p>
                                <b>Cost of Courtesy Phone/Charger:</b> $
                                {costData.bondValue}
                            </p>
                        </div>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div>
                            <h2>Totals:</h2>
                            <br></br>
                        </div>
                        <div>
                            <b>Bond:</b> ${costData.bondValue}
                            <br></br>
                            <b>Service Fee:</b> ${costData.serviceFee}
                            <br></br>
                            <b>Total:</b> ${costData.totalFee}
                            <br></br>
                            <b>GST:</b> ${costData.gst}
                            <br></br>
                            <b>Total(+GST):</b> ${costData.totalGstFee}
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-9 col-9">
                        <div>
                            <p>
                                <b>Phone Fix Services</b>
                            </p>
                        </div>
                        <div>42 Fixed IT Drive</div>
                        <div>
                            Hastings<br></br>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <p>
                                <b>Contact Us</b>
                            </p>
                        </div>
                        <div>
                            <p>Phone: 06-765-4321</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
