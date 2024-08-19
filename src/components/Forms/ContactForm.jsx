'use client';
import { Button, Form } from 'react-bootstrap';
import './form.css';

const ContactForm = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-6 title">Contact Us</h1>
      <Form className="mx-auto bg-white p-6 rounded-lg contact-form">
        <Form.Group className="mb-4">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="rounded-lg"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="rounded-lg"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="subject">Subject</Form.Label>
          <Form.Control
            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
            className="rounded-lg"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            as="textarea"
            id="message"
            name="message"
            placeholder="message"
            className="rounded-lg"
          />
        </Form.Group>
        <Button type="submit" className="block mx-auto w-full h-12 rounded-lg">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
