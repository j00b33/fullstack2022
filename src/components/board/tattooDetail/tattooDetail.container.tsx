import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as D from "./tattooDetail.styles";
import { GoCreditCard } from "react-icons/go";

export const FETCH_TATTOO = gql`
  query fetchTattoo($tattooId: String!) {
    fetchTattoo(tattooId: $tattooId) {
      id
      name
      description
      process
      image
      payment
      price
      date
      isTaken
      tattooDesign
      user
      tattooTags
      tattooMethod
      tattooGenre
      tattooType
      tattooBodypart
      tattooRegion
    }
  }
`;

export default function TattooDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_TATTOO, {
    variables: { tattooId: String(router.query.tattooDetail) },
  });

  return (
    <D.Wrapper>
      <D.BodyWrapper>
        <D.Title>{data?.fetchTattoo?.name}</D.Title>
        <D.Title>{data?.fetchTattoo?.price}</D.Title>
      </D.BodyWrapper>

      <D.Purchase>
        <GoCreditCard />
      </D.Purchase>
    </D.Wrapper>
  );
}
