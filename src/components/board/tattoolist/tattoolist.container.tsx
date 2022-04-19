import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as T from "./tattoolist.styles";

export const FETCH_TATTOOS = gql`
  query fetchTattoos {
    fetchTattoos {
      id
      name
      price
      tattooGenre {
        genre
      }
      tattooTags {
        tag
      }
    }
  }
`;

export default function TattooListContainer() {
  const { data, loading } = useQuery(FETCH_TATTOOS);
  console.log(" 🌼 ", data);

  const router = useRouter();
  if (loading) {
    return "Loading...";
  }

  const onClickUpload = () => {
    router.push("/board/upload");
  };

  const onClickDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  return (
    <T.Wrapper>
      <T.Title>Tattoo List</T.Title>
      <T.Body>
        {data?.fetchTattoos.map((el) => (
          <T.SingleBox key={el.id} id={el.id} onClick={onClickDetail}>
            <T.Image src="/empty.png" />
            <T.Text> {el.name} </T.Text>
            <T.Text> {el.price}₩ </T.Text>
            <T.Tags>
              <T.Tag>{el.tattooGenre.genre} </T.Tag>
              <T.Tag>#{el.tattooTags[0].tag}</T.Tag>
            </T.Tags>
          </T.SingleBox>
        ))}
      </T.Body>
      <T.Upload onClick={onClickUpload}>Upload Tattoo</T.Upload>
    </T.Wrapper>
  );
}
