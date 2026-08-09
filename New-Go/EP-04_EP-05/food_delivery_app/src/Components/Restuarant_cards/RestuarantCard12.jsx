const RestuarantCard12 = () => {
    return (
        <div className="restuarant-card">
            <div className="dish-image-container">
                <img src="/Images/dish12.jpg" alt="Belgian Chocolate Scoop" className="dish-img" />
            </div>
            <div className="card-details-container">
                <h3 className="restuarant-name">Gelato & Creamery</h3>
                <div className="rating-distance-container">
                    <span className="rating">4.9 ⭐</span>
                    <span className="distance">0.5 km away</span>
                </div>
                <p className="tag-line">Artisanal frozen desserts & waffle cones</p>
            </div>
        </div>
    );
};

export default RestuarantCard12;