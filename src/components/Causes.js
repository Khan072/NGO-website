import React, { useState } from 'react';
import styled from 'styled-components';

const CausesContainer = styled.section`
  padding: 40px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff6600;
`;

const CauseCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;
`;

const CauseCard = styled.div`
  background: white;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1em;
    margin-bottom: 15px;
  }

  button {
    background: #ff6600;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background: #e55a00;
    }
  }
`;

const causes = [
  {
    title: 'Education for All',
    shortDescription:
      'Providing quality education to underprivileged children. Ensuring that every child has access to schooling and lifelong learning.',
    fullDescription:
      'Providing quality education to underprivileged children. Ensuring that every child has access to schooling and lifelong learning. Our goal is to bridge the educational gap by offering learning resources, mentorship, and extracurricular activities to children in marginalized communities. We believe that education is the most powerful tool to empower future generations and break the cycle of poverty. By providing scholarships, building schools, and training teachers, we aim to make education accessible for all. Every child deserves an opportunity to learn, grow, and achieve their dreams, irrespective of their socio-economic background.',
    image: 'edu4all.jpeg',
  },
  {
    title: 'Healthcare and Nutrition',
    shortDescription:
      'Offering healthcare services and nutritious food to those in need. Improving health outcomes and reducing malnutrition in rural areas.',
    fullDescription:
      'Offering healthcare services and nutritious food to those in need. Improving health outcomes and reducing malnutrition in rural areas. Our healthcare programs focus on providing primary medical services, health education, and nutritional support to vulnerable populations. We conduct medical camps, vaccination drives, and health awareness workshops to ensure that every individual has access to basic healthcare. Our nutrition programs focus on providing balanced meals to children and pregnant women, reducing malnutrition, and promoting a healthy lifestyle. Together, we can create a healthier and stronger community, where everyone has the right to live a healthy life.',
    image: 'health.jpeg',
  },
  {
    title: 'Women Empowerment',
    shortDescription:
      'Providing skills training and support to women, promoting gender equality, and empowering women economically.',
    fullDescription:
      'Providing skills training and support to women, promoting gender equality, and empowering women economically. We work with women from disadvantaged backgrounds to offer vocational training, entrepreneurship opportunities, and community support. By helping women become financially independent, we aim to build a society where women can thrive. We also conduct workshops to raise awareness about gender equality, rights, and self-defense. Empowered women are essential for healthy communities, and we believe in giving every woman the tools and support she needs to succeed.',
    image: 'women.jpeg',
  },
  {
    title: 'Environmental Conservation',
    shortDescription:
      'Promoting sustainable practices, tree planting drives, and waste management for a cleaner and healthier environment.',
    fullDescription:
      'Promoting sustainable practices, tree planting drives, and waste management for a cleaner and healthier environment. Our environmental conservation programs focus on educating communities on sustainable living, reducing plastic waste, and preserving natural resources. We organize tree-planting events and work with local authorities to implement recycling programs. Climate change is a pressing issue, and it’s crucial that we act now to protect our planet. Together, we can reduce our carbon footprint and ensure that future generations inherit a healthy and thriving Earth.',
    image: 'enviro.jpeg',
  },
 

];

const Causes = () => {
  const [expanded, setExpanded] = useState(Array(causes.length).fill(false));

  const toggleReadMore = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <CausesContainer>
      <Title>Our Causes/Initiative</Title>
      <CauseCardContainer>
        {causes.map((cause, index) => (
          <CauseCard key={index}>
            <img src={cause.image} alt={cause.title} />
            <h3>{cause.title}</h3>
            <p>
              {expanded[index] ? cause.fullDescription : cause.shortDescription}
            </p>
            <button onClick={() => toggleReadMore(index)}>
              {expanded[index] ? 'Read Less' : 'Read More'}
            </button>
          </CauseCard>
        ))}
      </CauseCardContainer>
    </CausesContainer>
  );
};

export default Causes;
