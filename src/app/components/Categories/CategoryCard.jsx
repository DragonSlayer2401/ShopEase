import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap';
import './category.css';
import Link from 'next/link';

const CategoryCard = ({ category }) => {
  return (
    <Link href={`/products?category=${category.name}`}>
      <Card className="p-4 cursor-pointer">
        <CardImg variant="top" src={category.image} />
        <CardBody>
          <CardTitle className="text-black text-center">
            {category.name}
          </CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CategoryCard;
