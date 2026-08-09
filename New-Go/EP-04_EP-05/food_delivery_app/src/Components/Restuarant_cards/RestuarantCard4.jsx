const RestuarantCard4 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish4.jpg" alt="Creamy Fettuccine Alfredo" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Pasta Bella</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.4 ⭐</span>
                    <span className="distance">0.8 km away</span>
                </div>
                <p className="tag-line">Rich handmade pasta with garlic butter</p>
            </div>
        </div>
    );
};

export default RestuarantCard4;