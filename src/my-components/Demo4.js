import React, { useState } from "react";

function Demo4() {
    const [geolocation, setGeolocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setErrorMessage("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setGeolocation(`Latitude: ${latitude} <br /> Longitude: ${longitude}`);
    };

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setErrorMessage("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setErrorMessage("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setErrorMessage(
                    "The request to get user location has timed out."
                );
                break;
            case error.UNKNOWN_ERROR:
                setErrorMessage("An unknown error occurred.");
                break;
            default:
                setErrorMessage("An error occurred while getting location.");
                break;
        }
    };

    return (
        <div>
            <hr />
            <section>
                <h1>Advanced JS: HTML Geolocation</h1>

                <p>Click the button to get your coordinates.</p>
                <button onClick={getLocation}>Get current location</button>
                {errorMessage ? (
                    <p>{errorMessage}</p>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: geolocation }} />
                )}
            </section>
        </div>
    );
}

export default Demo4;
