import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 100px;
`;

export const EachWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;

export const BodyTitle = styled.div`
  font-size: 30px;
  font-family: Cochin;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 800px;

  margin-top: 90px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;

  border: 3px solid black;

  box-shadow: 15px 15px 0px 0px;
  margin-bottom: 20px;
`;

export const Tattooist = styled.div`
  margin-bottom: 10px;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: Cochin;

  cursor: pointer;

  :hover {
    color: #64748b;
  }

  transition: 0.4s;
`;

export const BodyText = styled.div`
  margin-bottom: 10px;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: Cochin;
`;

export const TattooistImage = styled.img`
  width: 200px;
  height: 200px;

  border-radius: 1000px;

  border: 3px solid black;

  box-shadow: 15px 15px 0px 0px;
  margin-bottom: 20px;
`;
