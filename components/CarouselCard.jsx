const CarouselCard = () => {
    return (
        <section className="carousel-section">
            <Card
                userimage="/assets/carousel01.png"
                rating="5.0 (6)"
                country="USA"
                userinfo="Life lessons from Katie Zaferes"
                price="138"
            />
            <Card
                userimage="/assets/carousel02.png"
                rating="5.0 (30)"
                country="USA"
                userinfo="Learn wedding photography"
                price="128"
            />
            <Card
                userimage="/assets/carousel03.png"
                rating="4.0 (2)"
                country="USA"
                userinfo="Group mountain biking"
                price="80"
            />
            <Card
                userimage="/assets/carousel03.png"
                rating="4.0 (2)"
                country="USA"
                userinfo="Group mountain biking"
                price="80"
            />
            <Card
                userimage="/assets/carousel02.png"
                rating="5.0 (30)"
                country="USA"
                userinfo="Learn wedding photography"
                price="128"
            />
            <Card
                userimage="/assets/carousel01.png"
                rating="5.0 (6)"
                country="USA"
                userinfo="Life lessons from Katie Zaferes"
                price="138"
            />
        </section>
    );
};

export const Card = (props) => {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    className="user-image"
                    src={props.userimage}
                    alt="carousel image"
                />
            </div>
            <div className="card-text">
                <div className="user-info">
                    <img src="/assets/star-icon.png" alt="star icon" />
                    <span> {`${props.rating} ${props.country}`}</span>
                    <p>{props.userinfo}</p>
                    <p> From {`$${props.price}`} / person</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
