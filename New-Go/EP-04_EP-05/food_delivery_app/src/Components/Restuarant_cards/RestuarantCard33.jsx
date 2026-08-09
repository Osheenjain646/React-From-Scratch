const RestuarantCard33 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish33.jpg" alt="Red Velvet Cream Cheese Cupcake" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Sweet Tooth Cupcakes</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.6 ⭐</span>
                    <span className="distance">1.9 km away</span>
                </div>
                <p className="tag-line">Moist bakery cakes topped with rich frosting</p>
            </div>
        </div>
    );
};

export default RestuarantCard33;