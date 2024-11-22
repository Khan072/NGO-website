import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  background: url('education.png') no-repeat center center/cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px; 
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const PrimaryButton = styled.button`
  background: #ff6600;
  color: white;

  &:hover {
    background: #e55a00;
  }
`;

const SecondaryButton = styled.button`
  background: #e6e6e6;
  color: #333;

  &:hover {
    background: #ccc;
  }
`;

const HeroSection = () => {
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
      image: '/l1.png', // Add a logo if needed
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
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Donate 4 a better world</HeroTitle>
        <p>Your small contribution can make a big change.</p>
        <HeroButtons>
          <PrimaryButton onClick={handleDonateClick}>Donate Now</PrimaryButton>
          {/* <SecondaryButton>Read More</SecondaryButton> */}
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
