import { ReactChild } from "react";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 100px;
`;

const LayoutBody = styled.div`
  width: 100%;
`;

export default function Layout(props: IProps) {
  const router = useRouter();

  const HIDDEN_NAVIGATION = [
    "/log/signup",
    "/log/login",
    "/log/select",
    "/log/customersignup",
    "/log/tattooistsignup",
    "/log/updateUser",
  ];

  const HIDDEN_FOOTER = [
    "/log/signup",
    "/log/login",
    "/log/select",
    "/log/customersignup",
    "/log/tattooistsignup",
  ];

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader />
      {!isHiddenNavigation && <LayoutNavigation />}

      <BodyWrapper>
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
