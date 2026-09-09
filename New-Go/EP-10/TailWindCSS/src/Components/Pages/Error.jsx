import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log("Route Error:", err);

    const status = err?.status || 404;
    const statusText = err?.statusText || "Page Not Found";
    const errorMessage = err?.data || err?.message || "Oops! The page you're looking for doesn't exist or an unexpected error occurred.";

    return (
        <div className="error-page-container">
            <div className="error-card">
                <div className="error-title-container">
                    <h1 className="error-title">Oops! Something went wrong</h1>
                    <div className="error-badge">{status} : {statusText}</div>
                </div>
                <p className="error-message">{errorMessage}</p>

                <div className="error-actions">
                    <Link to="/" className="error-home-btn">
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
