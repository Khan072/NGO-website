import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  padding: 40px 20px;
  background: #f7f7f7;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff6600;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const GalleryItem = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 900px;
    object-fit: cover;
  }

  p {
    padding: 10px;
    color: #333;
  }
`;

const Gallery = () => {
  const sections = [
    {
      title: 'Event Photos',
      images: [
        { src: 'bihar.png', description: 'Future of india' },
        { src: 'yoga.png', description: 'Yoga classes' },
        { src: 'give1.png', description: 'Helping poor' },
      ],
    },
    {
      title: 'Volunteer Activities',
      images: [
        { src: 'give3.png', description: 'Distributing Food' },
        { src: 'teh.jpg', description: 'Teaching Children' },
        { src: 'give2.png', description: 'Covid-19 awareness' },
      ],
    },
    {
      title: 'Beneficiaries',
      images: [
        { src: 'class.png', description: 'Children in Classroom' },
        { src: 'medical2.png', description: 'Families Receiving Aid' },
        { src: 'medical1.png', description: 'Healthcare Support' },
      ],
    },
    {
      title: 'Workshops and Trainings',
      images: [
        { src: 'festival2.png', description: 'Skills Training for Women' },
        { src: 'dan.png', description: 'Dance Workshop' },
        { src: 'education.png', description: 'Education for all campaign' },
      ],
    },
    // {
    //   title: 'Before and After',
    //   images: [
    //     { src: 'education.png', description: 'Living Conditions Improvement' },
    //     { src: 'education.png', description: 'Cleanup Drive Results' },
    //   ],
    // },
    {
      title: 'Success Stories',
      images: [
        { src: 'award1.png', description: 'Individual Impact Story' },
        { src: 'certi.png', description: 'Community Success' },
      ],
    },
    {
      title: 'Environmental Initiatives',
      images: [
        { src: 'plant1.png', description: 'Tree Plantation Drive' },
        { src: 'plant2.png', description: 'Recycling Program' },
      ],
    },
    {
      title: 'Celebrations and Festivals',
      images: [
        { src: 'festival1.png', description: 'Diwali Celeberation' },
        { src: 'stage.png', description: 'Cultural Event' },
      ],
    },
  ];

  return (
    <GalleryContainer>
      <Title>Gallery</Title>
      {sections.map((section, index) => (
        <Section key={index}>
          <h3>{section.title}</h3>
          <GalleryGrid>
            {section.images.map((image, idx) => (
              <GalleryItem key={idx}>
                <img src={image.src} alt={image.description} />
                <p>{image.description}</p>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </Section>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
