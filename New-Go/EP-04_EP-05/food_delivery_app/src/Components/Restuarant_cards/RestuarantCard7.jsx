const RestuarantCard7 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish7.jpg" alt="Tonkotsu Pork Ramen" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Ramen Noodle Bar</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">3.5 km away</span>
                </div>
                <p className="tag-line">Rich 12-hour broth with tender chashu</p>
            </div>
        </div>
    );
};

export default RestuarantCard7;