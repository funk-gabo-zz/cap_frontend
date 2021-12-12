import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 230px;
  height: 130px;
  background-color: #14395c;
  margin-top: 12px;
  border-radius: 20px;
  color: #e7e7e7;
  h1 {
    font-size: 20px;
    color: #e7e7e7;
  }
  span {
    color: white;
    font-size: 16px;
    text-shadow: 1px 1px 1px black;
  }
  @media (max-width: 1224px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Secc = styled.section`
  min-height: 100%;
  h2 {
    font-size: 22;
  }
`;
export const NavButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
