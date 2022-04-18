import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as T from "./tattooistList.styles";

export const FETCH_TATTOOISTS = gql`
  query fetchTattooists {
    fetchTattooists {
      id
      name
      userImage
      email
      userDetail
    }
  }
`;

export default function TattooistListContainer() {
  const { data, loading } = useQuery(FETCH_TATTOOISTS);
  const router = useRouter();

  if (loading) {
    return "Loading...";
  }

  console.log(" 👑 Tattooist List ", data);

  const onClickContact = () => {
    router.push("https://mail.google.com/mail/u/0/#inbox?compose=new");
  };

  return (
    <T.Wrapper>
      <T.Title>Tattooists</T.Title>
      <T.Body>
        {data?.fetchTattooists.map((el) => (
          <T.SingleBox key={el.id} id={el.id}>
            <T.Image src={el.userImage ? el.userImage : "/emptyUser.png"} />
            <T.UserInfo>
              <T.Text>Tattooist ID: {el.id}</T.Text>
              <T.Text> Tattooist: {el.name} </T.Text>
              <T.Email onClick={onClickContact}> Email: {el.email} </T.Email>
              <T.Text> Description: {el?.userDetail} </T.Text>
            </T.UserInfo>
          </T.SingleBox>
        ))}
      </T.Body>
    </T.Wrapper>
  );
}
