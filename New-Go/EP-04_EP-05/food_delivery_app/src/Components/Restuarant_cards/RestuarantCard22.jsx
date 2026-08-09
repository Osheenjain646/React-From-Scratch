const RestuarantCard22 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish22.jpg" alt="Seafood Saffron Paella" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Valencia Paella Bar</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">4.5 km away</span>
                </div>
                <p className="tag-line">Traditional Spanish rice with mussels & prawns</p>
            </div>
        </div>
    );
};

export default RestuarantCard22;