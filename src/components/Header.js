import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: #ff6600;
  padding: 10px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeaderTop = styled.div`
  font-size: 0.9em;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 10px;
  /* margin-left: 50%; */
  /* padding: 20px; */
  border-radius: 100%;

  @media (min-width: 768px) {
    height: 70px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  li {
    margin: 5px 0;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    li {
      margin: 0 10px;
    }
  }
`;

const DonateButton = styled.button`
  background: white;
  color: #ff6600;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background: #e6e6e6;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const Header = () => {
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleDonateClick = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_9tJio7PQ3YJx5w', // Replace with your Razorpay Key ID
      amount: 500, // Amount in paise (50000 paise = 500 INR)
      currency: 'INR',
      name: 'RiseUp Community Foundation',
      description: 'Donation',
      image: '/l2.png', // Add a logo if needed
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Donor Name',
        email: 'donor@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'NGO Address',
      },
      theme: {
        color: '#ff6600',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <HeaderContainer>
      <HeaderTop>
      
      Email: riseupcommunityfoundation@gmail.com | Phone: +91 9472031822
      </HeaderTop>
      <Navbar>
        <Logo src="/l2.png" alt="The Charity Logo" />
        <NavList>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/causes">Causes</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          {/* <li><Link to="/news">News</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          
        </NavList>
        <DonateButton onClick={handleDonateClick}>Donate Now</DonateButton>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
