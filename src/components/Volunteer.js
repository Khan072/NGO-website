import React, { useState } from 'react';
import styled from 'styled-components';

const VolunteerContainer = styled.section`
  padding: 40px 20px;
  background: #f7f7f7;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff6600;
`;

const SubTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #333;
`;

const OpportunitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 30px;
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

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;

const CallToAction = styled.div`
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

const TestimonialContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #fff3e6;
  border-radius: 10px;
  font-style: italic;
`;

const FAQContainer = styled.div`
  margin-top: 40px;
  text-align: left;

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

const FormContainer = styled.div`
  margin-top: 40px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const FormTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #ff6600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  background: #ff6600;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;

  &:hover {
    background: #e55a00;
  }
`;
const Section = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  color: red;
  line-height: 1.6;
`;


const Volunteer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "ec4482d5-9040-48f9-9124-a96275b6eadf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormSubmitted(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <center>
    <VolunteerContainer>
      <Title>Become a Volunteer</Title>
      <SubTitle>Make a Difference Today!</SubTitle>
      <p>
        Volunteers are the heart of our organization. By joining us, you’ll have
        the opportunity to contribute directly to our initiatives, whether by
        educating children, organizing events, or helping with community
        outreach. Together, we can create meaningful and lasting change.
      </p>

      <Title>Why Volunteer with Us?</Title>
      <p>
        - Impact Lives Directly
        <br />
        - Develop New Skills
        <br />
        - Be a Part of a Passionate Community
      </p>

      <Title>Volunteer Opportunities</Title>
      <OpportunitiesContainer>
        <OpportunityCard>
          <h3>Teaching & Mentorship</h3>
          <p>Share your knowledge and inspire young minds.</p>
        </OpportunityCard>
        <OpportunityCard>
          <h3>Event Management</h3>
          <p>Help plan and organize impactful community events.</p>
        </OpportunityCard>
        <OpportunityCard>
          <h3>Fundraising</h3>
          <p>Assist in raising resources for various causes.</p>
        </OpportunityCard>
        <OpportunityCard>
          <h3>Art & Craft Workshops</h3>
          <p>Assist in creative workshops for children and adults.</p>
        </OpportunityCard>
      </OpportunitiesContainer>

      <Title>No Experience Needed</Title>
      <p>
        We welcome anyone with a passion for giving back. Whether you have a few
        hours a week or want to be involved full-time, there's a place for you.
      </p>

      <CallToAction>
        <CTAButton>Volunteer Today!</CTAButton>
      </CallToAction>

      <TestimonialContainer>
        “Volunteering has been a life-changing experience for me. I’ve seen the
        smiles of children whose lives have been transformed, and it’s all worth
        it!” - Jane Doe
      </TestimonialContainer>
      

      <FAQContainer>
      <center>
        <h3>FAQs</h3>
        <div>
          <strong>Do I need any special skills to volunteer?</strong>
          <p>No special skills are required; just the willingness to help.</p>
        </div>
        <div>
          <strong>How much time do I need to commit?</strong>
          <p>
            We welcome any amount of time you can give, from a few hours a week
            to a full-time commitment.
          </p>
        </div>
      </center>
      </FAQContainer>
      <Section>
  <h3>Colleges That Joined Our Internship Program</h3>
  <Paragraph>
    We have partnered with many esteemed colleges to provide internship opportunities to students who want to contribute to our mission. Below is a list of some of the colleges that have joined our internship program:
  </Paragraph>
  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    <li>• Patna Women’s College</li>
    <li>• Lovely Professional University</li>
    <li>• JD Women's College</li>
    <li>• Magadh Mahila College</li>
    <li>• Amity University</li>
    <li>• SRM College, Delhi</li>
    <li>• BIL, Patna</li>
    <li>• L.N Mishra</li>
    <li>• BIT Mesra</li>
    <li>• NIFT, Patna</li>
    <li>• Cimage College</li>
    <li>• Galgotia, Delhi</li>
    <li>• College of Commerce and Science</li>
  </ul>
</Section>

      

      <FormContainer>
      <FormTitle>Volunteer Application Form</FormTitle>
      {formSubmitted ? (
        <p>Thank you for signing up to volunteer! We will get in touch soon.</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Full Name" required />
          <Input type="email" name="email" placeholder="Email Address" required />
          <Input type="tel" name="phone" placeholder="Phone Number" required />
          <TextArea name="message" rows="5" placeholder="Why do you want to volunteer?" required />
          <SubmitButton type="submit">Submit Application</SubmitButton>
        </Form>
      )}
      <p>{result}</p>
    </FormContainer>
    </VolunteerContainer>
    </center>
  );
};

export default Volunteer;
