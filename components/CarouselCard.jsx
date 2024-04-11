const CarouselCard = () => {
    return (
        <section className="carousel-section">
            <Card />
            <Card />
            <Card />
        </section>
    );
};

export const Card = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    className="user-image"
                    src="/assets/carousel01.png"
                    alt="carousel image 1"
                />
            </div>
            <CardInfo />
        </div>
    );
};

export const CardInfo = () => {
    return (
        <div className="card-text">
            <div className="user-info">
                <img src="/assets/star-icon.png" alt="star icon" />
                <span> 5.0 (6) USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p></p>
            </div>
        </div>
    );
};

export default CarouselCard;
