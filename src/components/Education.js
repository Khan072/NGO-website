import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CenterText = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const CenterImage = styled.img`
  flex: 1;
  max-width: 300px;
  border-radius: 10px;
`;

const centersData = [
  {
    name: "Hartali More",
    description: (
      <ul>
        <li>Our first Free Education center started at Hartali More.</li>
        <li>Provides free education to underprivileged children.</li>
        <li>Offers basic literacy and numeracy classes.</li>
        <li>Vocational training in sewing and crafts.</li>
        <li>Midday meals to encourage regular attendance.</li>
        <li>Focuses on health and hygiene education.</li>
        <li>After-school tutoring for older students.</li>
        <li>Organizes educational field trips.</li>
        <li>Regular parent-teacher meetings for better engagement.</li>
        <li>Provides free school supplies and uniforms.</li>
        <li>Workshops on digital literacy and skills development.</li>
      </ul>
    ),
    image: "teh.jpg"
  },
  {
    name: "Mithapur",
    description: (
      <ul>
        <li>The Mithapur center is established to help children in slum areas.</li>
        <li>Focuses on primary education for young children.</li>
        <li>Weekly health check-ups to monitor well-being.</li>
        <li>Nutritious snacks during breaks for energy and focus.</li>
        <li>Offers computer literacy classes.</li>
        <li>Art and dance activities for holistic development.</li>
        <li>Parent engagement programs to ensure involvement.</li>
        <li>Prepares children for enrollment in formal schools.</li>
        <li>Special education classes for children with disabilities.</li>
        <li>After-school programs for children engaged in work.</li>
        <li>Partnerships with NGOs for mental health support.</li>
      </ul>
    ),
    image: "teach1.png"
  },
  {
    name: "Kailash Nagar",
    description: (
      <ul>
        <li>The Kailash Nagar center emphasizes empowerment of girls and women.</li>
        <li>Offers literacy and math skills for foundational education.</li>
        <li>Vocational training in tailoring and embroidery.</li>
        <li>Health education focused on female hygiene.</li>
        <li>Menstrual hygiene management workshops.</li>
        <li>Life skills training for personal development.</li>
        <li>Scholarships for higher education opportunities.</li>
        <li>Workshops on self-defense and personal safety.</li>
        <li>Counseling for career and higher education planning.</li>
        <li>Job placement support through local business partnerships.</li>
        <li>Community engagement programs to raise awareness.</li>
      </ul>
    ),
    image: "s3.png"
  },
  {
    name: "Daroga Rai Path",
    description: (
      <ul>
        <li>Focuses on free education for low-income families.</li>
        <li>Provides literacy programs for all age groups.</li>
        <li>Offers homework help and tutoring services.</li>
        <li>STEM clubs to foster interest in science and technology.</li>
        <li>Conducts regular health camps and vaccination drives.</li>
        <li>Vocational training in carpentry and welding.</li>
        <li>Career counseling for students seeking further education.</li>
        <li>Internet access to promote research and learning.</li>
        <li>Runs a library and reading room for community use.</li>
        <li>Personalized coaching through local volunteer efforts.</li>
        <li>Educational workshops on various important topics.</li>
      </ul>
    ),
    image: "s2.png"
  },
  {
    name: "Khajpura",
    description: (
      <ul>
        <li>Focuses on early childhood education for children aged 3-6.</li>
        <li>Play-based learning for holistic development.</li>
        <li>Nutritious meals provided to young learners.</li>
        <li>Parenting and early child care workshops.</li>
        <li>Health and dental checkups for young children.</li>
        <li>Story-telling and puppet shows for interactive learning.</li>
        <li>Speech and language therapy for children in need.</li>
        <li>Collaboration with pediatricians for health support.</li>
        <li>Family literacy programs to engage parents.</li>
        <li>Workshops on positive discipline and child development.</li>
        <li>Regular health assessments to track progress.</li>
      </ul>
    ),
    image: "s1.png"
  },
  // Add more centers as needed
];

const Education = () => {
  return (
    <EducationContainer>
      {centersData.map((center, index) => (
        <CenterSection key={index}>
          <CenterText>
            <h2>{center.name}</h2>
            <p>{center.description}</p>
          </CenterText>
          <CenterImage src={center.image} alt={center.name} />
        </CenterSection>
      ))}
    </EducationContainer>
  );
};

export default Education;
