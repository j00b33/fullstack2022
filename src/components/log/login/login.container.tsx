import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import * as L from "./login.styles";

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password)
  }
`;

export default function LoginContainer() {
  const router = useRouter();

  const [userLogin] = useMutation(USER_LOGIN);

  // const {accessToken, setAccessToken} = useContext(GlobalContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignup = () => {
    router.push("/log/select");
  };

  const onClickLogin = async () => {
    await userLogin({
      variables: {
        email,
        password,
      },
    });
    router.push("/");
  };

  return (
    <L.Wrapper>
      <L.Title>Log in</L.Title>
      <L.BodyWrapper>
        <L.InnerSection>
          <L.Text>Email</L.Text>
          <L.Password onChange={onChangeEmail} placeholder="Enter your email" />
        </L.InnerSection>
        <L.InnerSection>
          <L.Text>Password</L.Text>
          <L.Password
            onChange={onChangePw}
            type="password"
            placeholder="Enter your password"
          />
        </L.InnerSection>
      </L.BodyWrapper>
      <L.SignupSection>
        <L.Warn> Don't have an account? ➤ </L.Warn>
        <L.Signup onClick={onClickSignup}>Sign up</L.Signup>
      </L.SignupSection>
      <L.LogIn onClick={onClickLogin}>Log in</L.LogIn>
    </L.Wrapper>
  );
}
