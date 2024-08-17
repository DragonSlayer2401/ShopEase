import { Col, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import './category.css';

const CategoryContainer = ({ categories }) => {
  return (
    <Row>
      {categories.map((category, index) => (
        <Col key={index} xs={12} sm={6} lg={3}>
          <CategoryCard category={category} />
        </Col>
      ))}
    </Row>
  );
};

export default CategoryContainer;
