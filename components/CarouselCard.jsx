import cardData from "../component data/carouselCard.js";
const CarouselCard = () => {

    const renderCard = cardData.map((datum) => (
        <Card
            userimage={datum.userimage}
            rating={datum.rating}
            country={datum.country}
            userinfo={datum.userinfo}
            price={datum.price}
        />
    ));

    return (
        <section className="carousel-section">
            {renderCard}
        </section>
    );
};

export const Card = ({ userimage, rating, country, userinfo, price }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    className="user-image"
                    src={userimage}
                    alt="carousel image"
                />
            </div>
            <div className="card-text">
                <div className="user-info">
                    <img src="/assets/star-icon.png" alt="star icon" />
                    <span> {`${rating} ${country}`}</span>
                    <p>{userinfo}</p>
                    <p> From {`$${price}`} / person</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
