import * as F from "./styles";
import { useRouter } from "next/router";
import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkLine } from "react-icons/ri";

export default function LayoutFooter() {
  const router = useRouter();

  const onClickInstagram = () => {
    router.push("https://www.instagram.com/_pzzzb/");
  };

  const onClickKakao = () => {
    router.push("https://open.kakao.com/o/s9DcyRbe");
  };

  return (
    <F.Wrapper>
      <F.LeftBody>
        <F.Title>♢ Tattoo FullStack</F.Title>
        <F.Text>Founder: JB Park</F.Text>
        <F.Text>Company Name: Tattoo Fullstack</F.Text>
        <F.Text>Address: Somewhere on Earth</F.Text>
        <F.Text></F.Text>
      </F.LeftBody>

      <F.RightBody>
        <F.Link onClick={onClickInstagram}>
          <BsInstagram />
        </F.Link>
        <F.Link onClick={onClickKakao}>
          <RiKakaoTalkLine />
        </F.Link>
      </F.RightBody>
    </F.Wrapper>
  );
}
