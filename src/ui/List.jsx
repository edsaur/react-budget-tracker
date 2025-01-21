import styled from "styled-components";

const StyledListContainer = styled.div`
  background-color: rgb(250, 0, 40);
  padding: 30px;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  max-width: 600px; /* Limit container width */
  margin: 20px auto; /* Center container horizontally */
  color: white; /* Text color for better contrast */
  text-align: left; /* Align text to the left */
  min-height: 200px; /* Ensure a minimum height for scrolling */
  max-height: 100px; /* Limit the maximum height for scrolling */
  overflow-y: scroll; /* Enable vertical scrolling */
  box-sizing: border-box; /* Ensures padding and borders are included in height */
`;

const StyledList = styled.ul`
  list-style-type: none; /* Remove default bullets */
  margin: 0;
  padding: 0;
`;

export default function List({ children }) {
  return (
    <StyledListContainer>
      <StyledList>
        {children}
      </StyledList>
    </StyledListContainer>
  );
}
