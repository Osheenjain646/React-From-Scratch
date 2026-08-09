const RestuarantCard25 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish25.jpg" alt="Mango Passionfruit Blast" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Tropical Smoothie Cafe</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.5 ⭐</span>
                    <span className="distance">1.6 km away</span>
                </div>
                <p className="tag-line">100% natural cold-pressed fruit energy</p>
            </div>
        </div>
    );
};

export default RestuarantCard25;