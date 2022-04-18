import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 39px;
  font-family: Cochin;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Text = styled.div`
  font-size: 20px;
  font-family: Cochin;
`;

export const Rate = styled.input`
  width: 40px;
  font-size: 15px;
  font-family: Cochin;
  height: 40px;
`;

export const Input = styled.input`
  width: 430px;
  height: 40px;
  font-size: 15px;
  font-family: Cochin;
`;

export const UploadButton = styled.div`
  cursor: pointer;
  width: 100px;
  height: 30px;

  font-size: 15px;
  font-family: Cochin;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    color: white;
    background-color: #2d394b;
  }

  transition: 0.4s;

  color: #2d394b;
  background: white;
  border: 2px solid #2d394b;
`;
