const RestuarantCard10 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish10.jpg" alt="Avocado Quinoa Power Bowl" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Green Garden Salads</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.5 ⭐</span>
                    <span className="distance">1.8 km away</span>
                </div>
                <p className="tag-line">Fresh organic greens & light dressings</p>
            </div>
        </div>
    );
};

export default RestuarantCard10;