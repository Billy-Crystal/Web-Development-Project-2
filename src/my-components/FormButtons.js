// Import all dependencies, other Components
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook for form state management

// Function Component
function FormButtons() {
    const [formData, setFormData] = useState({
        // Add state for form data if needed
    });

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add any logic for form submission, e.g., sending data to a server

        // Example: Navigate to the Invoice component after submission
        // You can replace this with your actual logic
        window.location.href = "/invoice";
    };

    // Component UI: HTML Rendering
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="submit"
                className="btn me-3 text-dark bg-white"
                style={{ width: "5em" }}
                value="SUBMIT"
            />
            <input
                type="reset"
                className="btn me-3 text-dark bg-white"
                style={{ width: "5em" }}
                value="RESET"
            />
            <Link to="/faq">
                <input
                    type="button"
                    className="btn me-3 text-dark bg-white"
                    style={{ width: "5em" }}
                    value="FAQ"
                />
            </Link>
        </form>
    );
}

// Export this component to the entire app, can be re-used or hooked into other Components
export default FormButtons;
