const RestuarantCard6 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish6.jpg" alt="Crispy Carne Asada Tacos" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Taco Fiesta</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.3 ⭐</span>
                    <span className="distance">2.0 km away</span>
                </div>
                <p className="tag-line">Fiesta of Mexican flavors & house salsa</p>
            </div>
        </div>
    );
};

export default RestuarantCard6;