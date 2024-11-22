import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
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

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #333;
  margin: 0 0 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  text-align: center;
  width: 150px;
`;

const TeamImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const TeamName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const TeamRole = styled.p`
  font-size: 1rem;
  color: #555;
`;

const About = () => {
  const teamMembers = [
    {
      name: 'Nishi Mishra',
      role: 'Treasurer',
      imgUrl: 'head1.png', 
    },
    {
      name: 'Aditya Krishna',
      role: 'Secretary',
      imgUrl: 'head3.png',
    },
    {
      name: 'Khushbu Mishra',
      role: 'President',
      imgUrl: 'head2.png',
    },
  ];

  return (
    <AboutContainer>
      <Title>About Us</Title>
      <section>
        <h3>
          <Paragraph>
          Welcome to RiseUp Community Foundation! We are a non-government organization based in Patna, dedicated to making a positive impact on the lives of slum children, families, and communities. for this also
          </Paragraph>
        </h3>
      </section>

      <Section>
  <h3>Our Mission</h3>
  <Paragraph>
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      <li>• <strong>Quality Education:</strong> Ensuring equitable access to quality education and skill development for slum children, empowering them to reach their full potential.</li>
      <li>• <strong>Nutrition for All:</strong> Partnering with food banks, supporters, and communities to provide nutritious meals for poor communities.</li>
      <li>• <strong>Healthcare for the Vulnerable:</strong> Providing essential medical resources and healthcare to people affected by poverty and emergency situations.</li>
      <li>• <strong>Empowering the Future:</strong> Releasing children from the cycle of poverty through education and skill-building.</li>
      <li>• <strong>Supporting Families:</strong> Offering assistance to families and children with limited means through our various campaigns.</li>
    </ul>
  </Paragraph>
</Section>

      

      <Section>
        <h3>Our Values</h3>
        <Paragraph>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li>Compassion: We are committed to making a difference in the lives of those we serve.</li>
            <li>Collaboration: We believe in the power of partnerships and community involvement.</li>
            <li>Innovation: We embrace creativity and new ideas to solve complex problems.</li>
            <li>Accountability: We are accountable to our stakeholders and the communities we serve.</li>
          </ul>
        </Paragraph>
      </Section>

    

      <Section>
  <h3>Our History</h3>
  <Paragraph>
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      <li>•In 2020 Our first Free Education Centre started at Hartali More.</li>
      <li>• In 2022 More centres opened at Mithapur, Kailash Nagar, Daroga Rai Path, Khajpura, R Block, Gandhi Maidan, Saguna More, and Veer Chand Patel Path.</li>
      <li>• Eventually, more people joined, and we started collaborating with colleges to provide internship programs.</li>
      <li>• Currently, we have more than 8 centres providing free education.</li>
      <li>• Over 300 children receive free education every day.</li>
      <li>• More than 20 leaders and 50 volunteers are presently working with us.</li>
      <li>• Engaged more than 1,500 interns to date from various colleges.</li>
    </ul>
  </Paragraph>
</Section>
<Section>
  <h3>Download Resources</h3>
  <Paragraph>
    Download our resources to learn more about our mission, goals, and how you can get involved. Click the button below to download our latest report, brochure, or other materials.
  </Paragraph>
  <a href="/RCF_Resourse.pdf" download>
    <button style={{
      backgroundColor: '#ff6600',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>
      Download Resources
    </button>
  </a>
</Section>

<section>
  <h1>Our Team Leaders</h1>
        <TeamContainer>
          
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <TeamImage src={member.imgUrl} alt={member.name} />
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
            </TeamMember>
          ))}
        </TeamContainer>
        </section>
    </AboutContainer>
  );
};

export default About;