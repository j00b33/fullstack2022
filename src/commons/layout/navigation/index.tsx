import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 400px;
  margin-bottom: 5px;
`;

const ContentText = styled.div`
  font-size: 18px;
  font-family: Cochin;
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  :hover {
    color: black;
  }
`;

export const HeaderDivision = styled.div`
  border: 2px solid #64748b;
  width: 100%;
`;

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickTattoo = () => {
    router.push("/board/tattooList");
  };

  const onClickReview = () => {
    router.push("/board/tattooistReviewList");
  };
  const onClickTattooists = () => {
    router.push("/board/tattooistList");
  };

  // const onClickDesign = () => {
  //   router.push("/board/tattooDesign");
  // };

  return (
    <Wrapper>
      <Menu>
        <ContentText onClick={onClickTattoo}>Tattoo</ContentText>
        {/* <ContentText onClick={onClickDesign}>Tattoo Design</ContentText> */}
        <ContentText onClick={onClickTattooists}>Tattooists</ContentText>
        <ContentText onClick={onClickReview}>Reviews</ContentText>
      </Menu>

      <HeaderDivision />
    </Wrapper>
  );
}
