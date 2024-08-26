'use client';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import NavBar from '../components/Header/NavBar';
import ProductContainer from '../components/Products/ProductContainer';

const getProducts = async (category) => {
  try {
    if (category) {
      // Fetch the products from the API
      const products = (
        await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        )
      ).data;
      // Return the products
      return products;
    } else {
      // Fetch the products from the API
      const products = (await axios.get('https://fakestoreapi.com/products'))
        .data;
      // Return the products
      return products;
    }
  } catch (error) {
    console.error(error);
    // Return an empty array if there is an error
    return [{}];
  }
};

export default async function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const products = await getProducts(category);
  return (
    <>
      <NavBar />
      <Container className="mx-auto py-8 px-6" style={{ maxWidth: '1200px' }}>
        <ProductContainer products={products} />
      </Container>
    </>
  );
}
