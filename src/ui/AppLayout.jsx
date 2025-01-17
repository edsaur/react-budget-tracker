import { Outlet } from "react-router";
import styled from "styled-components";

const Container = styled.div`
background-color: rgb(255, 255, 255, 0.3);
display: flex;
padding: 1em;
width: 95%;
height: 95%;
border-radius: 16px;
margin: auto;
`

const StyledAppLayout = styled.main`
  background-color: rgba(
    150,
    190,
    250,
    0.4
  ); /* Darker grey with transparency */
  display: flex;
  flex-direction: row;
  width: 75%;
  height: 75%; /* Or any desired height */
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 10px; /* Smooth corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); /* Soft shadow */
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Container>
        <Outlet />
      </Container>
    </StyledAppLayout>
  );
}
