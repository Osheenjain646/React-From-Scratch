const RestuarantCard5 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish5.jpg" alt="Hyderabadi Dum Biryani" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Royal Biryani House</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.9 ⭐</span>
                    <span className="distance">1.5 km away</span>
                </div>
                <p className="tag-line">Aromatic spices & slow-cooked perfection</p>
            </div>
        </div>
    );
};

export default RestuarantCard5;