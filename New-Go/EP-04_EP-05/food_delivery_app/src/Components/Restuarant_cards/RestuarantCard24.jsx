const RestuarantCard24 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish24.jpg" alt="Crispy Masala Dosa" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">South Indian Dosa Corner</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.8 ⭐</span>
                    <span className="distance">0.9 km away</span>
                </div>
                <p className="tag-line">Served with coconut chutney & hot sambar</p>
            </div>
        </div>
    );
};

export default RestuarantCard24;