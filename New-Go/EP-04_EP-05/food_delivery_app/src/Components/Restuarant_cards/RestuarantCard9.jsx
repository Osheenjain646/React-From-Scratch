const RestuarantCard9 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish9.jpg" alt="Ribeye Steak with Garlic Butter" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">The Prime Steakhouse</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">4.2 km away</span>
                </div>
                <p className="tag-line">Premium aged cuts grilled to perfection</p>
            </div>
        </div>
    );
};

export default RestuarantCard9;