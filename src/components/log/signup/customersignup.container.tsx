import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./signup.styles";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      name
      phoneNumber
      age
      isTattooist
    }
  }
`;

export default function CustomerSignupContainer() {
  const [createUser] = useMutation(CREATE_USER);

  const router = useRouter();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const onClickLogin = () => {
    router.push("/log/login");
  };

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangePw = (event) => {
    setPassword(event.target.value);
  };

  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onClickSignup = async () => {
    alert("Welcome :) Moving to log in page...");

    await createUser({
      variables: {
        createUserInput: {
          id,
          name,
          password,
          email,
          phoneNumber,
          age: Number(age),
          isTattooist: false,
        },
      },
    });
    router.push("/log/login");
  };

  return (
    <S.Wrapper>
      <S.Title>Customer Sign up</S.Title>

      <S.BodyWrapper>
        <S.BodyLeft>
          <S.Section>
            <S.Text>User ID</S.Text>
            <S.Input onChange={onChangeId} placeholder="Enter your user ID" />
          </S.Section>

          <S.Section>
            <S.Text>User Name</S.Text>
            <S.Input
              onChange={onChangeName}
              placeholder="Enter your user name"
            />
          </S.Section>

          <S.Section>
            <S.Text>Email</S.Text>
            <S.Input onChange={onChangeEmail} placeholder="Enter your email" />
          </S.Section>

          <S.Section>
            <S.Text>Password</S.Text>
            <S.Input
              onChange={onChangePw}
              type="password"
              placeholder="Enter your password"
            />
          </S.Section>

          <S.Section>
            <S.Text>Phone Number</S.Text>
            <S.Input
              onChange={onChangePhoneNumber}
              placeholder="Enter your phone number"
            />
          </S.Section>

          <S.Section>
            <S.Text>Age</S.Text>
            <S.Input
              onChange={onChangeAge}
              placeholder="Age below 17 cannot sign up"
            />
          </S.Section>
        </S.BodyLeft>

        <S.DivisionLine />

        <S.BodyRight>
          <S.SocialSection>
            <S.SocialSignup>
              <S.SocialSignupInner>
                <S.SocialImage src="/socialLogin/google.png" />
                <S.SocialText>Sign up with Google account</S.SocialText>
              </S.SocialSignupInner>
            </S.SocialSignup>

            <S.SocialSignup>
              <S.SocialSignupInner>
                <S.SocialImage src="/socialLogin/naver.png" />
                <S.SocialText>Sign up with Naver account</S.SocialText>
              </S.SocialSignupInner>
            </S.SocialSignup>
            <S.SocialSignup>
              <S.SocialSignupInner>
                <S.SocialImage src="/socialLogin/kakao.png" />
                <S.SocialText>Sign up with Kakao account</S.SocialText>
              </S.SocialSignupInner>
            </S.SocialSignup>
          </S.SocialSection>
        </S.BodyRight>
      </S.BodyWrapper>
      <S.LoginSection>
        <S.Warn>Already have an account? ➤</S.Warn>
        <S.Login onClick={onClickLogin}>Log in</S.Login>
      </S.LoginSection>
      <S.Signup onClick={onClickSignup}>Sign up</S.Signup>
    </S.Wrapper>
  );
}
