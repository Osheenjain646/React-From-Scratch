const RestuarantCard34 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish34.jpg" alt="Chicken Garlic Toum Shawarma" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Beirut Shawarma Express</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">1.4 km away</span>
                </div>
                <p className="tag-line">Rotisserie grilled meat wrapped in fresh pita</p>
            </div>
        </div>
    );
};

export default RestuarantCard34;