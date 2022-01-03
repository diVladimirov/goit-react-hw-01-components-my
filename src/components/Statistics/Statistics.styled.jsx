import styled from 'styled-components';
import getRandomHexColor from './GetRandomHex';

export const Statisticsed = styled.section`
  width: 700px;
  margin: 0px auto;
  box-shadow: 2px 4px 8px 2px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  color: gray;
  padding: 30px 0;
  background: white;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  width: calc(20%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
  color: white;
  background-color: ${getRandomHexColor};
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 400;
`;
