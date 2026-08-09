const RestuarantCard40 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish40.jpg" alt="Grilled Garlic Butter Tiger Prawns" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Ocean Grill Seafood</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">4.1 km away</span>
                </div>
                <p className="tag-line">Catch of the day grilled over open flame</p>
            </div>
        </div>
    );
};

export default RestuarantCard40;