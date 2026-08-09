const RestuarantCard50 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish50.jpg" alt="Kashmiri Mutton Rogan Josh" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Saffron Lounge</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.7 ⭐</span>
                    <span className="distance">3.9 km away</span>
                </div>
                <p className="tag-line">Slow cooked tender mutton in rich crimson gravy</p>
            </div>
        </div>
    );
};

export default RestuarantCard50;