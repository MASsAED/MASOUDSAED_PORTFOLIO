import Carousel from 'react-bootstrap/Carousel';
import './component.css'



function DarkVariantExample() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={"./images/Ecomm.jpg"}
                    alt="Ecommerce Website"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5>Ecommerce Platform </h5>
                    {/* <p>Click To view</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={"./images/SOC.jpg"}
                    alt="Social website"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5>Social Platform</h5>
                    {/* <p>Think Beyond Search: Top Channels & Emerging Trends to Grow Your Brand.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={"./images/jam.jpg"}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                    <h5>Music PlayList</h5>
                    {/* <p>Where Live Happens. Experience music in real-time with others.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;