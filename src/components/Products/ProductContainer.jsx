import { Col, Row } from 'react-bootstrap';
import './product.css';
import ProductCard from './ProductCard';

const ProductContainer = ({ products }) => {
  return (
    <Row>
      {products.map((product, index) => (
        <Col key={index} xs={12} md={6} lg={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductContainer;
