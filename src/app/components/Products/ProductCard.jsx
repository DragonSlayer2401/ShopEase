import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'react-bootstrap';
import './product.css';

const ProductCard = ({ product }) => {
  return (
    <Card className="p-4 rounded-lg mb-6">
      <CardImg
        variant="top"
        src={product.image}
        className="w-full rounded-lg mb-4"
      />
      <CardBody className="">
        <CardTitle className="text-black text-center text-lg font-bold mb-2 product-name">
          {product.title}
        </CardTitle>
        <CardText className="text-black text-center mb-4 product-price">
          ${product.price}
        </CardText>
      </CardBody>
      <Button className="block mx-auto rounded-lg py-3 px-6">
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;
