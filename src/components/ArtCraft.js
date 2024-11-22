import React from 'react';
import styled from 'styled-components';

const ArtCraftContainer = styled.section`
  padding: 40px 20px;
  background: #f7f7f7;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff6600;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const OpportunityCard = styled.div`
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
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #ff6600;
  }

  p {
    color: #666;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const CTAButton = styled.button`
  background: #ff6600;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;

  &:hover {
    background: #e55a00;
  }
`;

const GalleryContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
  justify-content: center;
  
`;

const GalleryImage = styled.img`
  width: 100%;
  border-radius: 5px;
  justify-content: center;
`;

const FAQContainer = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 1.8em;
    margin-bottom: 20px;
    color: #ff6600;
  }

  div {
    margin-bottom: 15px;

    p {
      margin: 5px 0;
    }

    strong {
      color: #333;
    }
  }
`;

const ArtCraft = () => {
  return (
    <ArtCraftContainer>
      <Title>Art & Craft for Community Development</Title>
      <SubTitle>Art has the magical power to bring people together, create a sense of belonging, and foster a supportive community. It allows individuals to express themselves in unique and meaningful ways, fostering creativity and innovation. Whether through painting, sculpture, music, dance, or any other form, art can be a therapeutic outlet for emotional healing. It provides a safe space for individuals to explore their feelings, process experiences, and find solace. Additionally, art has the ability to bridge cultural divides, promoting understanding and empathy among diverse communities. By engaging in artistic activities, people can connect on a deeper level, share their stories, and build lasting bonds.</SubTitle>
      
      <Section>
        <Title>Our Mission with Art & Craft</Title>
        <p>
        We believe that everyone deserves access to the transformative power of art, regardless of their background or circumstances. Through workshops, exhibitions, and collaborative projects, we create opportunities for individuals to discover their talents, build self-confidence, and develop new skills. By partnering with local organizations, schools, and community centers, we ensure our programs are accessible and inclusive. We strive to create a supportive environment where participants can connect, share their stories, and find a sense of belonging. Together, we can break down barriers, uplift voices, and create a brighter future through the universal language of art.
        </p>
      </Section>

      <Section>
        <Title>Workshops and Activities</Title>
        <OpportunitiesContainer>
          {[
            { title: 'Painting and Drawing', img: 'education.png' },
            { title: 'Pottery and Sculpting', img: 'education.png' },
            { title: 'Recycled Art Projects', img: 'education.png' },
            // { title: 'Textile Art', img: 'textile_art.jpg' },
            // { title: 'DIY Craft Projects', img: 'diy_craft.jpg' },
          ].map((activity, index) => (
            <OpportunityCard key={index}>
              <img src={activity.img} alt={activity.title} />
              <h3>{activity.title}</h3>
              <p>Join us for {activity.title.toLowerCase()} and unleash your creativity.</p>
            </OpportunityCard>
          ))}
        </OpportunitiesContainer>
      </Section>

    

      <Section>
        <Title>Volunteer Opportunities</Title>
        <h3>Your contribution as a volunteer can make a significant difference in the lives of those we serve. By sharing your skills and passion for art and craft, you help create a nurturing environment where creativity can flourish and personal growth is encouraged. You don't need to be a professional artist to volunteer; all you need is a willingness to learn and a desire to help others. Whether you prefer working directly with participants or behind the scenes, there's a role for everyone. We also welcome groups from schools, workplaces, or other organizations to volunteer together, fostering teamwork and community spirit. Your time and effort can help us reach more people, expand our programs, and create a lasting impact. Join us in our mission to uplift and empower underprivileged communities through the transformative power of art and craft. Together, we can inspire hope, build connections, and make a real difference in the world.</h3>
        
      </Section>

    

   

      <Section>
        <Title>Benefits of Art & Craft</Title>
        <center>
        <p>
          
          - Promotes mental well-being<br />
          - Enhances creativity and problem-solving skills<br />
          - Encourages collaboration and teamwork<br />
          - Provides a source of income (e.g., selling crafted items)
          - Improves fine motor skills through detailed craftwork
- Reduces stress by providing a relaxing activity<br />
- Builds confidence through skill development<br />
- Encourages self-expression and individuality<br />
- Fosters a sense of accomplishment with completed projects<br />
- Creates opportunities for cultural learning and exchange<br />
- Enhances focus and patience during intricate projects<br />
- Connects people through shared interests and activities<br />
- Provides an outlet for processing emotions in a healthy way<br />
- Promotes sustainability by using recycled and upcycled materials
        </p>
        </center>
      </Section>

      

      <Section>
        <Title>FAQs</Title>
        <FAQContainer>
          <center>
          <div>
            <strong>Do I need any special skills to participate?</strong>
            <p>No, anyone with an interest in art and craft is welcome to join.</p>
          </div>
          <div>
            <strong>How can I donate art supplies?</strong>
            <p>You can drop off supplies at our center or contact us for more information.</p>
          </div>
          <div>
            <strong>Are the workshops open to all age groups?</strong>
            <p>Yes, our workshops are open to people of all ages.</p>
          </div>
          </center>
        </FAQContainer>
      </Section>
    </ArtCraftContainer>
  );
};

export default ArtCraft;
