import styled from "styled-components";

// Main button container
const Button = styled.button`
  background-color: ${(props) => props.$bgColor || '#4CAF50'};
  color: ${(props) => props.$textColor || 'white'};
  font-size: 1rem;  // Standard font size
  padding: 0.5em 1em;  // Padding for top/bottom and left/right
  border: none;  // No border
  border-radius: 8px;  // Rounded corners
  cursor: pointer;  // Pointer cursor on hover
  transition: background-color 0.3s ease;  // Smooth background color transition

  &:hover {
    background-color: ${(props) => props.$hoverColor || '#45a049'}; 
  }

  width: auto;

  &:disabled {
    background-color: ${(props) => props.$disabledColor || '#bfbfbf'};  
    cursor: not-allowed;  // Not allowed cursor on disabled
  }
`;

export default Button
