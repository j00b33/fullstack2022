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
  font-family: Cochin;
  margin-bottom: 40px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 900px;

  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const SingleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: 1px solid grey;

  width: 240px;
  height: 400px;

  margin-bottom: 50px;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 238px;
  height: 238px;
  object-fit: cover;
`;

export const contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 200px;
  height: 90px;
`;

export const Text = styled.div`
  font-size: 15px;
  font-family: Cochin;
`;

export const date = styled.div`
  font-size: 12px;
  color: grey;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;

  margin-bottom: 10px;
`;

export const Tag = styled.div`
  width: 70px;
  font-size: 10px;
  font-family: Cochin;
  height: 30px;

  border-radius: 30px;

  color: white;
  background-color: #64748b;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerDivision = styled.div`
  width: 240px;
  border: 0.4px solid grey;

  margin-top: 10px;
`;

export const Upload = styled.div`
  cursor: pointer;
  border: 2px solid black;

  width: 200px;
  height: 40px;

  font-size: 15px;
  font-family: Cochin;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    color: white;
    background-color: #64748b;
  }

  transition: 0.4s;
`;
