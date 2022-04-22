import styled from "@emotion/styled";
import { RiSettings3Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/router";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useContext, useState } from "react";
import Modal from "antd/lib/modal";
import { GlobalContext } from "../../../../pages/_app";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 50px;
  font-family: Cochin;

  padding-right: 200px;
  cursor: pointer;
`;

export const HeaderFunction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  font-family: Cochin;

  margin-top: 25px;
`;

export const HeaderDivision = styled.div`
  border: 2px solid #2d394b;
  width: 100%;
  margin-bottom: 5px;
`;

export const Text = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: grey;

  :hover {
    color: #2d394b;
  }
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLanding = () => {
    router.push("/");
  };

  const onClickSettings = () => {
    router.push("/log/updateUser");
  };
  const onClickLogin = () => {
    router.push("/log/login");
  };

  const { loggedin, setLoggedin } = useContext(GlobalContext);

  return (
    <Wrapper>
      <Header>
        <Title onClick={onClickLanding}>Tattoo Fullstack</Title>
        <HeaderFunction>
          <Text onClick={onClickLogin}>
            {{ loggedin } ? <AiOutlineLogout /> : <AiOutlineLogin />}
          </Text>
          <Text>
            <BiUser />
          </Text>
          <Text onClick={onClickSettings}>
            <RiSettings3Line />
          </Text>
        </HeaderFunction>
      </Header>

      <HeaderDivision />
    </Wrapper>
  );
}
