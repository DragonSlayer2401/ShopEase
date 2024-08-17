import ContactForm from "@/components/Forms/ContactForm";
import NavBar from "@/components/Header/NavBar";
import { Container } from "react-bootstrap";

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
