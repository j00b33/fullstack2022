import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: Cochin;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 50px;
  margin-bottom: 10px;
`;

export const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 80px;

  margin-bottom: 30px;
`;

export const Text = styled.div`
  font-size: 15px;
  font-family: Cochin;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Password = styled.input`
  width: 400px;
  height: 40px;
  font-size: 15px;
  font-family: Cochin;
`;

export const SignupSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  margin-bottom: 40px;
`;

export const Warn = styled.div`
  font-size: 13px;
  color: #c5c5c5;
  font-family: Cochin;
`;

export const Signup = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-family: Cochin;
  color: #c5c5c5;

  :hover {
    color: #919191;
  }
`;

export const LogIn = styled.div`
  cursor: pointer;
  width: 200px;
  height: 40px;
  font-size: 15px;
  font-family: Cochin;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid #2d394b;
  color: #2d394b;

  :hover {
    color: white;
    background-color: #2d394b;
  }

  transition: 0.4s;
`;
