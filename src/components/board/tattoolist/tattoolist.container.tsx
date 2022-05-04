import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
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
      date
    }
  }
`;

export const FETCH_TATTOO_WITH_GENRE = gql`
  query fetchTattooWithGenre($tattooGenreId: Float!) {
    fetchTattooWithGenre(tattooGenreId: $tattooGenreId) {
      name
      price
      tattooGenre {
        genre
      }
      tattooTags {
        tag
      }
      date
    }
  }
`;

export default function TattooListContainer() {
  const [genreNum, setGenreNum] = useState(0);

  const { data, loading } = useQuery(FETCH_TATTOOS);
  const { data: genreData } = useQuery(FETCH_TATTOO_WITH_GENRE, {
    variables: {
      tattooGenreId: genreNum,
    },
  });

  console.log(genreNum, genreData);

  const router = useRouter();
  if (loading) {
    return "Loading...";
  }

  const onClickUpload = () => {
    router.push("/board/upload");
  };

  const onClickTotal = () => {
    router.push("/board/tattooList");
  };

  const onClickDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  const onClickClassicAmericana = () => {
    setGenreNum(1);
  };

  const onClickNewSchool = () => {
    setGenreNum(2);
  };

  const onClickJapanese = () => {
    setGenreNum(3);
  };

  const onClickBlack = () => {
    setGenreNum(4);
  };

  const onclickPortraiture = () => {
    setGenreNum(5);
  };

  const onClickRealism = () => {
    setGenreNum(6);
  };

  const onclickBlackwork = () => {
    setGenreNum(7);
  };

  const onClickWaterColor = () => {
    setGenreNum(8);
  };

  console.log("🍒", genreNum);

  return (
    <T.Wrapper>
      <T.Title onClick={onClickTotal}>Tattoo List</T.Title>
      <T.Upload onClick={onClickUpload}>Upload Tattoo</T.Upload>

      <T.MainWrapper>
        <T.GenreList>
          <T.GenreTitle>Genre Category</T.GenreTitle>
          <T.GenreDivision />
          <T.Genres>
            <T.Genre onClick={onClickClassicAmericana}>
              ✻ Classic Americana
            </T.Genre>
            <T.Genre onClick={onClickNewSchool}>✻ New School</T.Genre>
            <T.Genre onClick={onClickJapanese}>✻ Japanese</T.Genre>
            <T.Genre onClick={onClickBlack}>✻ Black and Grey</T.Genre>
            <T.Genre onClick={onclickPortraiture}>✻ Portraiture</T.Genre>
            <T.Genre onClick={onClickRealism}>✻ Realism</T.Genre>
            <T.Genre onClick={onclickBlackwork}>✻ Blackwork</T.Genre>
            <T.Genre onClick={onClickWaterColor}>✻ Water Color</T.Genre>
          </T.Genres>
        </T.GenreList>
        <T.Body>
          {data?.fetchTattoos.map((el) => (
            <T.SingleBox key={el.id} id={el.id} onClick={onClickDetail}>
              <T.Image src="/cotton.png" />
              <T.contents>
                <T.Text> {el.name} </T.Text>
                <T.Text> {el.price}₩ </T.Text>
                <T.date>{el.date}</T.date>
              </T.contents>

              <T.Tags>
                <T.Tag>{el.tattooGenre.genre} </T.Tag>
                <T.Tag>#{el.tattooTags[0].tag}</T.Tag>
              </T.Tags>
            </T.SingleBox>
          ))}
        </T.Body>
      </T.MainWrapper>
    </T.Wrapper>
  );
}
