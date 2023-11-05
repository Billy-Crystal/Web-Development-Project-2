import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";

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
        // Hide other demos when showing Demo-1
        setShowComponentDemo2(false);
        setShowComponentDemo3(false);
        setShowComponentDemo4(false);
        setShowComponentDemo5(false);
    };

    const toggleComponentDemo2 = () => {
        setShowComponentDemo2(!showComponentDemo2);
        // Hide other demos when showing Demo-2
        setShowComponentDemo1(false);
        setShowComponentDemo3(false);
        setShowComponentDemo4(false);
        setShowComponentDemo5(false);
    };

    const toggleComponentDemo3 = () => {
        setShowComponentDemo3(!showComponentDemo3);
        // Hide other demos when showing Demo-3
        setShowComponentDemo1(false);
        setShowComponentDemo2(false);
        setShowComponentDemo4(false);
        setShowComponentDemo5(false);
    };

    const toggleComponentDemo4 = () => {
        setShowComponentDemo4(!showComponentDemo4);
        // Hide other demos when showing Demo-4
        setShowComponentDemo1(false);
        setShowComponentDemo2(false);
        setShowComponentDemo3(false);
        setShowComponentDemo5(false);
    };

    const toggleComponentDemo5 = () => {
        setShowComponentDemo5(!showComponentDemo5);
        // Hide other demos when showing Demo-5
        setShowComponentDemo1(false);
        setShowComponentDemo2(false);
        setShowComponentDemo3(false);
        setShowComponentDemo4(false);
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
                                <div className="col-12">
                                    <Demo1 />
                                </div>
                            )}
                            {showComponentDemo2 && (
                                <DndProvider backend={HTML5Backend}>
                                    <div className="col-12">
                                        <Demo2 />
                                    </div>
                                </DndProvider>
                            )}
                            {showComponentDemo3 && (
                                <div className="col-12">
                                    <Demo3 />
                                </div>
                            )}
                            {showComponentDemo4 && (
                                <div className="col-12">
                                    <Demo4 />
                                </div>
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
