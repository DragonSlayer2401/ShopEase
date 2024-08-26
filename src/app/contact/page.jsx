import { Container } from 'react-bootstrap';
import NavBar from '../components/Header/NavBar';
import ContactForm from '../components/Forms/ContactForm';

export default async function Contact() {
  return (
    <>
      <NavBar />
      <Container className="mx-auto py-8 px-6">
        <ContactForm />
      </Container>
    </>
  );
}
