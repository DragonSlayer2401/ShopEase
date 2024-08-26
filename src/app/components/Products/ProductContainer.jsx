import { Col, Row } from 'react-bootstrap';
import './product.css';
import ProductCard from './ProductCard';

const ProductContainer = ({ products }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6 title">
        Shop Our Products
      </h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductContainer;
