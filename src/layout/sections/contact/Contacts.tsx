import styled from "styled-components";
import { StyledButton } from "../../../components/Button";
import { SectionTitle } from "../../../components/SelectionTitle";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder="subject" />
        <Field placeholder="subject" />
        <Field as={"textarea"} placeholder="message" />
        <StyledButton>Send</StyledButton>
      </StyledForm>
    </StyledContacts>
  );
};
const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: lightgreen;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const Field = styled.input``;
