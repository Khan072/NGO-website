import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const VolunteerContainer = styled.section`
  padding: 40px 20px;
  background: #f7f7f7;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    max-width: 100%;
    margin-bottom: 15px;
  }
`;

const VolunteerSection = () => {
  const navigate=useNavigate();
  const cards = [
    { title: 'Become a Volunteer', icon: 'e2.png',path:'/volunteer' },
    { title: 'Dance & Music', icon: 'dan.png' ,path:'/dancemusic'},
    { title: 'Art & Craft', icon: 'ar1.png' ,path:'/artcraft'},
    {title: 'Eduaction',icon:'s2.png',path:'/education'},
   
  ];

  return (
    <VolunteerContainer>
      <h2>Get Involved</h2>
      <CardContainer>
        {cards.map((card, index) => (
          <Card key={index} onClick={()=>navigate(`${card.path}`)}>
            <img src={card.icon} alt={card.title} />
            <h3>{card.title}</h3>
          </Card>
        ))}
      </CardContainer>
    </VolunteerContainer>
  );
};

export default VolunteerSection;
