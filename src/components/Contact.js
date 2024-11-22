import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 40px 20px;
  background: #f7f7f7;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff6600;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #333;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background: #ff6600;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #e55a00;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 30px;
  text-align: left;

  h3 {
    color: #ff6600;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const ThankYouMessage = styled.p`
  font-size: 1.5em;
  color: #28a745; /* Green color for success message */
  margin-top: 20px;
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can also handle the form submission (e.g., sending data to an API)
    setSubmitted(true);
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <SubTitle>We'd love to hear from you!</SubTitle>

      {!submitted ? (
        <ContactForm onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </ContactForm>
      ) : (
        <ThankYouMessage>Thank you for your message! We will get back to you soon.</ThankYouMessage>
      )}

      <ContactInfo>
        <h3>Get in Touch</h3>
        <p>Email: criseupcommunityfoundation@gmail.com</p>
        <p>Phone: +91 9472031822</p>
        <p>• Office Address: Murti Makan, Mainpura , Patna
        • Corr. Address: House no. 9, Road no. 2, Indrapuri, Patna</p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
