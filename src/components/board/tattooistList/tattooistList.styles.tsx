import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

export const SingleBox = styled.div`
  width: 900px;
  height: 130px;

  border: 2px solid #2d394b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 50px;

  cursor: pointer;
  :hover {
    background-color: #e5ebf5;
  }

  transition: 0.4s;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 100px;

  width: 180px;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 500px;
`;

export const Text = styled.div`
  font-size: 15px;
`;

export const Email = styled.div`
  font-size: 15px;
  :hover {
    color: #64748b;
  }
  transition: 0.4s;
`;
