import React, { useState } from "react";
import { ReactComponent as NewZealandMap } from "./images/nz.svg";

function Demo4() {
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = (region, event) => {
        setHoveredRegion(region);
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOut = () => {
        setHoveredRegion(null);
    };

    return (
        <div>
            <h2>New Zealand Map</h2>
            <div style={{ position: "relative" }}>
                <NewZealandMap
                    style={{ width: "100%" }}
                    onMouseOver={(e) => handleMouseOver("Manawatu-Wanganui", e)}
                    onMouseOut={handleMouseOut}
                />
                {hoveredRegion && (
                    <div
                        style={{
                            position: "absolute",
                            top: mousePosition.y,
                            left: mousePosition.x,
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            padding: "10px",
                            zIndex: 999,
                        }}
                    >
                        <p>Hovered Region: {hoveredRegion}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Demo4;
