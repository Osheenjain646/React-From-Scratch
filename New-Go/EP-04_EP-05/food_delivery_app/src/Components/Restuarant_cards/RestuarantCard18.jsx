const RestuarantCard18 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish18.jpg" alt="Beer-Battered Cod & Fries" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Seaside Fish & Chips</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.5 ⭐</span>
                    <span className="distance">4.0 km away</span>
                </div>
                <p className="tag-line">Crispy sea cod with homemade tartar sauce</p>
            </div>
        </div>
    );
};

export default RestuarantCard18;