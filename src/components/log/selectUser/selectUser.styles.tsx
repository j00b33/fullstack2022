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
  font-weight: 600;

  margin-bottom: 50px;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 500px;
`;

export const Option = styled.div`
  cursor: pointer;

  width: 200px;
  height: 300px;

  border: none;

  font-size: 20px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  :hover {
    color: #64748b;
  }
  transition: 0.4s;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;

  :hover {
    width: 230px;
    height: 230px;
  }

  transition: 0.4s;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
