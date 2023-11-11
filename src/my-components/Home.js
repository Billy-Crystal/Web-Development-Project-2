import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetail";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCost from "./FormCost";
import FormButtons from "./FormButtons";

function Home() {
    const [customerFormData, setCustomerFormData] = useState({
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

    const updateCustomerFormData = (data) => {
        setCustomerFormData(data);
    };

    const updateSharedState = (value) => setsharedBond(value);
    const [sharedBond, setsharedBond] = useState(0);
    const [customerType, setCustomerType] = useState("customer");
    const updateCustomerType = (value) => setCustomerType(value);

    const updateWarranty = (value) => {
        setsharedWarranty(value);
    };
    const [sharedWarranty, setsharedWarranty] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            navigate("/invoice", { state: { customerFormData } });
        } catch (e) {
            alert("ERROR!!!");
        }
    };

    return (
        <>
            <div className="container-fluid">
                <form
                    className="row"
                    style={{ minHeight: "60vh" }}
                    onSubmit={onSubmit}
                >
                    <div
                        className="col-12 col-lg-4 p-4 m-0"
                        style={{
                            minHeight: "30vh",
                            backgroundColor: "#FCF3CF",
                        }}
                    >
                        <FormCustomerDetail
                            passDataToParent={updateSharedState}
                            updateCustomerType={updateCustomerType}
                            updateCustomerFormData={updateCustomerFormData}
                        />
                    </div>

                    <div
                        className="col-12 col-lg-4 p-4 m-0"
                        style={{
                            minHeight: "30vh",
                            backgroundColor: "#D5F5E3",
                        }}
                    >
                        <FormRepairDetail passDataToParent={updateWarranty} />
                    </div>

                    <div className="col-12 col-lg-4 p-0 m-0">
                        <div
                            className="p-4"
                            style={{
                                minHeight: "30vh",
                                backgroundColor: "#2874A6",
                            }}
                        >
                            <FormCourtesyPhone
                                passDataToParent={updateSharedState}
                            />
                        </div>
                        <div
                            className="p-4"
                            style={{
                                minHeight: "20vh",
                                backgroundColor: "#EDBB99",
                            }}
                        >
                            <FormCost
                                sharedPropBond={sharedBond}
                                sharedPropWarranty={sharedWarranty}
                                customerType={customerType}
                            />
                        </div>
                    </div>

                    <div
                        className="p-4 text-center"
                        style={{
                            minHeight: "10vh",
                            backgroundColor: "#EDBB99",
                        }}
                    >
                        <FormButtons />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Home;
