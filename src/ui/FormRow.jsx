import styled from "styled-components"

// Main container for form row
const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  background-color: rgba(255, 255, 255, 0.95); /* Light background */
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Label styling
const Label = styled.label`
  text-align: start;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  color: #333;
`;

// Error message styling
const Error = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5em;
  font-weight: 500;
`;

export default function FormRow({label, error, children}) {
    return (
        <StyledFormRow>
         {label && <Label>{label}</Label>}
         {children}
         {error && <Error>{error}</Error>}
        </StyledFormRow>            
    )
}