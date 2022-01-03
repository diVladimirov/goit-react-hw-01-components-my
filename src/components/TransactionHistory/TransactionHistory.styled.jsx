import styled from 'styled-components';

export const TransactionTable = styled.table`
  color: gray;
  width: 600px;
  margin: 0px auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 4px 8px 2px rgba(34, 60, 80, 0.2);
`;

export const Transactionhead = styled.thead`
  background-color: greenyellow;
  color: white;
  height: 40px;
  text-transform: uppercase;
`;

export const TransactionRow = styled.tr`
  text-align: center;
  background-color: white;

  :nth-child(even) {
    background-color: gainsboro;
  }
`;

export const TransactionData = styled.td`
  padding: 12px;
  ::first-letter {
    text-transform: capitalize;
  }
`;
