import React, { useState, useEffect } from "react";

function Demo3() {
    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem("color_preference") || ""
    );
    const [textSize, setTextSize] = useState(
        localStorage.getItem("size_preference") || ""
    );

    useEffect(() => {
        if (backgroundColor) {
            document.getElementById(
                "customization-card"
            ).style.backgroundColor = backgroundColor;
        }

        if (textSize) {
            document.getElementById("customization-card").style.fontSize =
                textSize;
        }
    }, [backgroundColor, textSize]);

    const handleColorChange = (event) => {
        const selectedBGColor = event.target.value;
        setBackgroundColor(selectedBGColor);
        localStorage.setItem("color_preference", selectedBGColor);
    };

    const handleTextSizeChange = (event) => {
        const selectedTextSize = event.target.value;
        setTextSize(selectedTextSize);
        localStorage.setItem("size_preference", selectedTextSize);
    };

    return (
        <div>
            <h1>
                Remember user preferences (background color, font size, …) by
                using Local Storage API
            </h1>
            <div id="customization-card">
                <p>Lorem Ipsum</p>
                <img
                    src="https://www.typingpal.com/images/1/3/a/8/4/13a845e178cb05ecc149ffc850ad9a6eac19f85d-lorem-ipsum.png"
                    alt="Image"
                    height="100px"
                />
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit
                </p>
            </div>

            <p>YOUR PERSONAL PREFERENCES:</p>
            <label>Select background color: </label>
            <select
                id="colorOption"
                value={backgroundColor}
                onChange={handleColorChange}
            >
                <option value=""></option>
                <option value="red">RED</option>
                <option value="green">GREEN</option>
                <option value="yellow">YELLOW</option>
                <option value="ivory">IVORY</option>
                <option value="pink">PINK</option>
                <option value="purple">PURPLE</option>
            </select>

            <br />
            <label>Select Text Size: </label>
            <select
                id="sizeOption"
                value={textSize}
                onChange={handleTextSizeChange}
            >
                <option value=""></option>
                <option value="35px">VERY BIG</option>
                <option value="25px">BIG</option>
                <option value="16px">NORMAL</option>
            </select>
        </div>
    );
}

export default Demo3;
