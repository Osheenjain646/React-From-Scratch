const RestuarantCard19 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish19.jpg" alt="Nutella Banana Golden Waffles" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Waffle Wonderland</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">1.7 km away</span>
                </div>
                <p className="tag-line">Crispy on the outside, fluffy inside</p>
            </div>
        </div>
    );
};

export default RestuarantCard19;