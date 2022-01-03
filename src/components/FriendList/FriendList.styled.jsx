import styled from 'styled-components';

export const Friendlisted = styled.ul`
  margin: 30px auto;
  width: 400px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 2px 4px 8px 2px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  padding: 10px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StatusOn = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-right: 20px;
`;

export const StatusOff = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-right: 20px;
`;

export const Name = styled.p`
  padding-left: 20px;
`;
