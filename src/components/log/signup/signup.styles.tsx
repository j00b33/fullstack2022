import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;

export const BodyWrapper = styled.div`
  height: 600px;
  width: 870px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
`;

export const DivisionLine = styled.div`
  width: 1px;
  border: 1px solid #cfcfcf;
  height: 450px;
`;

export const BodyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 400px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: Cochin;

  margin-bottom: 30px;
  margin-right: 780px;
`;

export const Section = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  font-size: 15px;
  font-family: Cochin;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 15px;
  font-family: Cochin;
  width: 400px;
  height: 50px;
  border: 2px solid #2d394b;
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
`;

export const SocialSignup = styled.div`
  width: 400px;
  height: 50px;

  border: 2px solid #2d394b;
  box-shadow: 20px black;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  :hover {
    background-color: #2d394b;
    color: white;
    box-shadow: 10px 10px #64748b;
  }

  transition: 0.4s;
`;

export const SocialSignupInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 260px;
`;

export const SocialImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const SocialText = styled.div`
  font-size: 17px;
  font-weight: 600;

  margin-top: 1px;

  width: 220px;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 230px;

  margin-top: 40px;
`;

export const Warn = styled.div`
  font-size: 15px;
  font-family: Cochin;
  color: #c5c5c5;
`;

export const Login = styled.div`
  font-size: 15px;
  font-family: Cochin;
  color: #c5c5c5;
  cursor: pointer;
  :hover {
    color: #919191;
  }
`;

export const Signup = styled.div`
  margin-top: 40px;
  cursor: pointer;

  width: 500px;
  height: 40px;

  border: 2px solid #2d394b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #2d394b;
    color: white;
  }
  transition: 0.4s;
`;
