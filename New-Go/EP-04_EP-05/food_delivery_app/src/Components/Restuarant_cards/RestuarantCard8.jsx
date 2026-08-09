const RestuarantCard8 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish8.jpg" alt="Spicy Fried Wings Bucket" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Crispy Fried Chicken</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.2 ⭐</span>
                    <span className="distance">1.0 km away</span>
                </div>
                <p className="tag-line">Extra golden crispy & fiery dips</p>
            </div>
        </div>
    );
};

export default RestuarantCard8;