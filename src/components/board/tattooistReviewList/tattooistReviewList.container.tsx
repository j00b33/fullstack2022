import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as R from "./tattooistReviewList.styles";

const FETCH_TATTOOIST_REVIEW = gql`
  query fetchTattooistReviews {
    fetchTattooistReviews {
      id
      reviewDetail
      reviewImage
      rating
      user {
        id
        name
      }
    }
  }
`;

export default function TattooistReviewListcontainer() {
  const router = useRouter();
  const onClickUpload = () => {
    router.push("/board/uploadReview");
  };

  const { data } = useQuery(FETCH_TATTOOIST_REVIEW);

  return (
    <R.Wrapper>
      <R.Title>Tattoo Review</R.Title>
      <R.Body>
        {data?.fetchTattooistReviews.map((el) => (
          <R.SingleBox key={el.id} id={el.id}>
            <R.Image src={el?.reviewImage ? el.reviewImage : "/empty.png"} />
            <R.Text>Tattooist {el.user?.name} </R.Text>
            <R.Text></R.Text>
            <R.Text>{el.rating} stars</R.Text>
          </R.SingleBox>
        ))}
      </R.Body>
      <R.Upload onClick={onClickUpload}>Upload Review of Tattooist</R.Upload>
    </R.Wrapper>
  );
}
