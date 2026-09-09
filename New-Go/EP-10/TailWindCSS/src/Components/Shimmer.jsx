import {
    ShimmerThumbnail,
    ShimmerTitle,
    ShimmerText,
    ShimmerBadge
} from "react-shimmer-effects";

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <ShimmerThumbnail height={180} rounded className="shimmer-thumbnail" />
            <div className="shimmer-info">
                <ShimmerTitle line={1} gap={10} variant="primary" />
                <div className="shimmer-rating-row">
                    <ShimmerBadge width={60} />
                    <ShimmerBadge width={80} />
                </div>
                <ShimmerText line={2} gap={8} />
            </div>
        </div>
    );
};

const Shimmer = () => {
    return (
        <div className="body-container">
            {/* Shimmer Search / Filter Bar Placeholder */}
            <div className="shimmer-search-container">
                <ShimmerBadge width={300} />
                <ShimmerBadge width={120} />
            </div>

            {/* Shimmer Restaurant Cards Grid */}
            <div className="shimmer-container">
                {Array.from({ length: 8 }).map((_, index) => (
                    <ShimmerCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default Shimmer;