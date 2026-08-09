const RestuarantCard23 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish23.jpg" alt="Crispy Falafel Pita Wrap" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Mediterranean Falafel</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.4 ⭐</span>
                    <span className="distance">1.3 km away</span>
                </div>
                <p className="tag-line">Fresh tahini, hummus & crispy chickpea bites</p>
            </div>
        </div>
    );
};

export default RestuarantCard23;