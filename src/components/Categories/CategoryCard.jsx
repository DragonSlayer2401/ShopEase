import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap';
import './Category.css';

const CategoryCard = ({ category }) => {
  return (
    <Card className="p-4 cursor-pointer">
      <CardImg variant="top" src={category.image} />
      <CardBody>
        <CardTitle className="text-black text-center">
          {category.name}
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default CategoryCard;
