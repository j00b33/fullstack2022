import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 150px;

  background-color: #2d394b;
  color: white;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: Cochin;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InnerSubject = styled.div`
  font-size: 15px;
  font-family: Cochin;
  margin-bottom: 5px;
`;

const Text = styled.div`
  font-size: 12px;
  font-family: Cochin;
  margin-bottom: 3px;
`;

const Link = styled.div`
  font-size: 12px;
  font-family: Cochin;
  :hover {
    color: #a1bbc7;
  }
  cursor: pointer;

  transition: 0.4s;
`;

export default function LayoutFooter() {
  const router = useRouter();
  const onClickInstagram = () => {
    router.push("https://www.instagram.com/_pzzzb/");
  };
  return (
    <Wrapper>
      <Title>Tattoo FullStack</Title>
      <Contents>
        <Column>
          <InnerSubject>Social Media</InnerSubject>
          <Link onClick={onClickInstagram}>Insagram</Link>
          <Link>Facebook</Link>
          <Link>Twitter</Link>
        </Column>
        <Column>
          <InnerSubject>Help</InnerSubject>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </Column>

        <Column>
          <InnerSubject>Help</InnerSubject>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </Column>

        <Column>
          <InnerSubject>Help</InnerSubject>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </Column>

        <Column>
          <InnerSubject>Help</InnerSubject>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </Column>

        <Column>
          <InnerSubject>Help</InnerSubject>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </Column>

        <Column>
          <InnerSubject>Help</InnerSubject>
          <Text>asdf</Text>
          <Text>asdf</Text>
          <Text>asdf</Text>
        </Column>
      </Contents>
    </Wrapper>
  );
}
