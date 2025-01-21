import styled from "styled-components";

const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 15px auto;
  text-align: center;
`;

const DetailItem = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 16px;
  color: #333;

  span {
    font-weight: bold;
    margin-left: 4px;
  }
`;

export default function UserDetails({ state }) {
  const {name, cash, expenseAmount, incomeAmount} = state;
  return (
    <UserDetailsContainer>
      <DetailItem>
       {name || "John Doe"}&apos;s Cash:<span>₱{cash}</span>
      </DetailItem>
      <DetailItem>
        Expenses: <span>${expenseAmount}</span>
      </DetailItem>
      <DetailItem>
        Profit: <span>${incomeAmount}</span>
      </DetailItem>
    </UserDetailsContainer>
  );
}
