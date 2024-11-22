import React from 'react';
import styled from 'styled-components';

const DanceMusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const ProgramSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const ProgramText = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const ProgramImage = styled.img`
  flex: 1;
  max-width: 300px;
  border-radius: 10px;
`;

const ProgramTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const ProgramDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;

const ProgramList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ProgramItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const DanceAndMusic = () => {
  return (
    <DanceMusicContainer>
      <ProgramSection>
        <ProgramText>
          <ProgramTitle>Dance and Music Program</ProgramTitle>
          <ProgramDescription style={{ color: 'green', fontFamily: 'Bangers, cursive' }}>
            Our Dance and Music program plays a vital role in the holistic development of children. This program is designed to foster creativity, confidence, and collaboration through the medium of performing arts.
          </ProgramDescription>
          <ProgramList>
            <ProgramItem>Weekly classes in traditional and contemporary dance forms.</ProgramItem>
            <ProgramItem>Music classes focusing on both vocal and instrumental training.</ProgramItem>
            <ProgramItem>Participation in local cultural festivals and events.</ProgramItem>
            <ProgramItem>Opportunities to perform at community gatherings and NGO events.</ProgramItem>
            <ProgramItem>Workshops with professional dancers and musicians.</ProgramItem>
            <ProgramItem>Choreography and music composition sessions to nurture creativity.</ProgramItem>
            <ProgramItem>Enhances self-expression and emotional development.</ProgramItem>
            <ProgramItem>Boosts teamwork and leadership through group performances.</ProgramItem>
            <ProgramItem>Helps in building discipline and focus through regular practice.</ProgramItem>
            <ProgramItem>Provides a platform to showcase talent and gain recognition.</ProgramItem>
          </ProgramList>
        </ProgramText>
        <ProgramImage src="dan.png" alt="Children dancing and playing music" />
      </ProgramSection>
    </DanceMusicContainer>
  );
};

export default DanceAndMusic;
