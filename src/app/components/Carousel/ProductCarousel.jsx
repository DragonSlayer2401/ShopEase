import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import './carousel.css';

const ProductCarousel = ({ products }) => {
  return (
    <>
      <Carousel className="mb-8" data-bs-theme="dark">
        {products.map((product) => (
          <CarouselItem key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="carousel-image"
              />
            <CarouselCaption>
              <h3 className="text-2xl font-bold text-white text-center carousel-title carousel-text-shadow">
                {product.title}
              </h3>
              <p className="text-base text-center carousel-description carousel-text-shadow">
                {product.description}
              </p>
              <h4 className="text-xl font-bold text-center carousel-price carousel-text-shadow">
                ${product.price}
              </h4>
              <button
                type="button"
                className="text-base font-bold text-white carousel-button py-2.5 px-5"
              >
                View Details
              </button>
            </CarouselCaption>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
