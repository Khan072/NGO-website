import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterColumn = styled.div`
  margin: 10px;

  @media (min-width: 768px) {
    margin: 0 20px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
    margin: 5px 0;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;

    &:hover {
      color: #ff6600;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
  font-size: 0.8em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h4>About The Charity</h4>
          <p>Welcome to RiseUp Community Foundation!<br/> We are a non-government organization based in Patna,<br/>  dedicated to making a positive impact on the lives of slum children, families, and communities. for this also.</p>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact Us</h4>
          <p>
            
• Email: riseupcommunityfoundation@gmail.com<br/>
• Office Address: Murti Makan, Mainpura , Patna<br/>
• Corr. Address: House no. 9, Road no. 2, Indrapuri, Patna</p>
          <p>Phone: +91 9472031822</p>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow Us</h4>
          <SocialMediaLinks>
            <a href="https://www.facebook.com/Mishrasocialskillsclub/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/riseupcommunityfoundation/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@riseupcommunityfoundation" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </SocialMediaLinks>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        &copy; 2024 RiseUp Community Foundation | All Rights Reserved
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
