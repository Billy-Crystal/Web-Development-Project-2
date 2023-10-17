import React, { useState } from "react";

//Function Component
function AdvancedJS() {
    // State to manage the visibility of Component Demos
    const [showComponentDemo1, setShowComponentDemo1] = useState(false);
    const [showComponentDemo2, setShowComponentDemo2] = useState(false);
    const [showComponentDemo3, setShowComponentDemo3] = useState(false);
    const [showComponentDemo4, setShowComponentDemo4] = useState(false);
    const [showComponentDemo5, setShowComponentDemo5] = useState(false);

    // Function to toggle the visibility of Component Demos
    const toggleComponentDemo1 = () => {
        setShowComponentDemo1(!showComponentDemo1);
    };
    const toggleComponentDemo2 = () => {
        setShowComponentDemo2(!showComponentDemo2);
    };
    const toggleComponentDemo3 = () => {
        setShowComponentDemo3(!showComponentDemo3);
    };
    const toggleComponentDemo4 = () => {
        setShowComponentDemo4(!showComponentDemo4);
    };
    const toggleComponentDemo5 = () => {
        setShowComponentDemo5(!showComponentDemo5);
    };
    //Component UI: HTML Rendering
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-3">
                        <div class="row" style={{ backgroundColor: "red" }}>
                            <div class="col-sm-6 col-md-12">
                                <button
                                    class="btn btn-primary"
                                    style={{
                                        width: "100%",
                                        marginTop: "3px",
                                        marginBottom: "3px",
                                    }}
                                    onClick={toggleComponentDemo1}
                                >
                                    Demo-1
                                </button>
                            </div>
                            <div class="col-sm-6 col-md-12">
                                <button
                                    class="btn btn-primary"
                                    style={{
                                        width: "100%",
                                        marginBottom: "3px",
                                    }}
                                    onClick={toggleComponentDemo2}
                                >
                                    Demo-2
                                </button>
                            </div>
                            <div class="col-sm-6 col-md-12">
                                <button
                                    class="btn btn-primary"
                                    style={{
                                        width: "100%",
                                        marginBottom: "3px",
                                    }}
                                    onClick={toggleComponentDemo3}
                                >
                                    Demo-3
                                </button>
                            </div>
                            <div class="col-sm-6 col-md-12">
                                <button
                                    class="btn btn-primary"
                                    style={{
                                        width: "100%",
                                        marginBottom: "3px",
                                    }}
                                    onClick={toggleComponentDemo4}
                                >
                                    Demo-4
                                </button>
                            </div>
                            <div class="col-sm-6 col-md-12">
                                <button
                                    class="btn btn-primary"
                                    style={{
                                        width: "100%",
                                        marginBottom: "3px",
                                    }}
                                    onClick={toggleComponentDemo5}
                                >
                                    Demo-5
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9">
                        <div class="row" style={{ backgroundColor: "purple" }}>
                            {showComponentDemo1 && (
                                <div className="col-12">Component Demo-1</div>
                            )}
                            {showComponentDemo2 && (
                                <div className="col-12">Component Demo-2</div>
                            )}
                            {showComponentDemo3 && (
                                <div className="col-12">Component Demo-3</div>
                            )}
                            {showComponentDemo4 && (
                                <div className="col-12">Component Demo-4</div>
                            )}
                            {showComponentDemo5 && (
                                <div className="col-12">Component Demo-5</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;
