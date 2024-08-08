import CategoryContainer from '@/components/Categories/CategoryContainer';
import ProductCarousel from '@/components/Carousel/ProductCarousel';
import NavBar from '@/components/Navigation/NavBar';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const getCategories = async () => {
  try {
    // Fetch the categories from the API
    const categoryArray = (
      await axios.get('https://fakestoreapi.com/products/categories')
    ).data;

    // Create a map to store the category name and image
    const categoryMap = new Map();

    // Set the category name and image in the map
    const categoryPromises = categoryArray.map(async (category) => {
      const products = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const image = products.data[0].image;
      categoryMap.set(category, image);
    });

    // Wait for all promises to resolve
    await Promise.all(categoryPromises);

    // Convert the map to an array of objects
    const categories = Array.from(categoryMap).map(([category, imageURL]) => {
      return {
        name: category,
        image: imageURL,
      };
    });

    // Return the categories
    return categories;
  } catch (error) {
    console.error(error);
    // Return an empty array if there is an error
    return [{}];
  }
};

const getProducts = async () => {
  try {
    // Fetch the products from the API
    const products = (
      await axios.get('https://fakestoreapi.com/products?limit=5')
    ).data;
    // Return the products
    return products;
  } catch (error) {
    console.error(error);
    // Return an empty array if there is an error
    return [{}];
  }
};

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <NavBar />
      <Container className="mx-auto py-8 px-6">
        <ProductCarousel className="mx-auto" products={products}  />
        <CategoryContainer categories={categories} />
      </Container>
    </>
  );
}
