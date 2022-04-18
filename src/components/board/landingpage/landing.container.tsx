import * as M from "./landing.styles";
import { FiHeart } from "react-icons/fi";
import { BsPaperclip } from "react-icons/bs";

export default function LandingPage() {
  return (
    <M.Body>
      <M.EachWrapper>
        <M.BodyTitle>Design of the Month</M.BodyTitle>
        <M.BodyContent>
          <M.Box>
            <M.Image src="/landingPage/tiger.png" />
            <M.Tattooist>@onyo_ttt</M.Tattooist>
            <M.BodyText>
              <FiHeart />
              13,452 Likes
            </M.BodyText>
          </M.Box>

          <M.Box>
            <M.Image src="/landingPage/fox.png" />
            <M.Tattooist>@orly_tattoo</M.Tattooist>
            <M.BodyText>
              <FiHeart />
              12,798 Likes
            </M.BodyText>
          </M.Box>

          <M.Box>
            <M.Image src="/landingPage/snake.png" />
            <M.Tattooist>@utatt00</M.Tattooist>
            <M.BodyText>
              <FiHeart />
              10,317 Likes
            </M.BodyText>
          </M.Box>
        </M.BodyContent>
      </M.EachWrapper>

      <M.EachWrapper>
        <M.BodyTitle>Tattooist of the Month</M.BodyTitle>
        <M.BodyContent>
          <M.Box>
            <M.TattooistImage src="/landingPage/purple.png" />
            <M.Tattooist>@qwerttty</M.Tattooist>
            <M.BodyText>
              <BsPaperclip />
              964 Reviews
            </M.BodyText>
          </M.Box>

          <M.Box>
            <M.TattooistImage src="/landingPage/black.png" />
            <M.Tattooist>@_pzzzb</M.Tattooist>
            <M.BodyText>
              <BsPaperclip />
              783 Reviews
            </M.BodyText>
          </M.Box>

          <M.Box>
            <M.TattooistImage src="/landingPage/yellow.png" />
            <M.Tattooist>@zzmmal</M.Tattooist>
            <M.BodyText>
              <BsPaperclip />
              487 Reviews
            </M.BodyText>
          </M.Box>
        </M.BodyContent>
      </M.EachWrapper>
    </M.Body>
  );
}
