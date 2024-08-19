import NavBar from '@/components/Header/NavBar';
import ProductContainer from '@/components/Products/ProductContainer';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const getProducts = async () => {
  try {
    // Fetch the products from the API
    const products = (await axios.get('https://fakestoreapi.com/products'))
      .data;
    // Return the products
    return products;
  } catch (error) {
    console.error(error);
    // Return an empty array if there is an error
    return [{}];
  }
};

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <NavBar />
      <Container className="mx-auto py-8 px-6" style={{ maxWidth: '1200px' }}>
        <ProductContainer products={products} />
      </Container>
    </>
  );
}
