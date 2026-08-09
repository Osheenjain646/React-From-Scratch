const RestuarantCard28 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish28.jpg" alt="Loaded Loaded Cheese & Jalapeno Fries" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Fryology Fries Bar</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.3 ⭐</span>
                    <span className="distance">1.1 km away</span>
                </div>
                <p className="tag-line">Gourmet cut potatoes smothered in cheese</p>
            </div>
        </div>
    );
};

export default RestuarantCard28;