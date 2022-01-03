import styled from 'styled-components';

export const Profiled = styled.div`
  width: 500px;
  margin: 0px auto;
  box-shadow: 2px 4px 8px 2px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  border: 1px solid rgb(180, 180, 180);
  overflow: hidden;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  overflow: hidden;
  margin: 0px auto;
  background: gray;
`;

export const Description = styled.div`
  padding: 30px 0px;
  text-align: center;
  background: white;
`;

export const Name = styled.p`
  padding-top: 30px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
  color: black;
`;
export const TagLocation = styled.p`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(180, 180, 180);
  background: rgb(240, 240, 240);
`;

export const Items = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(33.3333%);
  padding: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: gray;

  :not(:last-child) {
    border-right: 1px solid rgb(180, 180, 180);
  }
`;

export const Amount = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: black;
`;
