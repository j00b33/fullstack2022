/* eslint-disable @next/next/no-sync-scripts */
import { gql, useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import * as D from "./tattooDetail.styles";

export const FETCH_TATTOO = gql`
  query fetchTattoo($tattooId: String!) {
    fetchTattoo(tattooId: $tattooId) {
      id
      name
      price
      description
      image
      tattooist {
        id
        name
      }
      # tattooDesign {
      #   name
      # }
      tattooTags {
        tag
      }
      tattooMethod {
        method
      }
      tattooGenre {
        genre
      }
      tattooBodypart {
        bodypart
        size
      }
      tattooRegion {
        region
      }
    }
  }
`;

export const CREATE_RECEIPT = gql`
  mutation createReceipt($impUid: String!, $price: Float!, $tattooId: String!) {
    createReceipt(impUid: $impUid, price: $price, tattooId: $tattooId) {
      id
      price
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      name
      phoneNumber
      email
    }
  }
`;

export default function TattooDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_TATTOO, {
    variables: { tattooId: String(router.query.tattooDetail) },
  });

  const info = data?.fetchTattoo;

  const { data: userData } = useQuery(FETCH_USER);

  const [createReceipt] = useMutation(CREATE_RECEIPT);

  const onClickPurchase = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp13990733");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: info?.name,
        amount: Number(info?.price),
        buyer_email: userData?.email,
        buyer_name: userData?.name,
        buyer_tel: userData?.phoneNumber,
        buyer_addr: "대한민국",
        buyer_postcode: "00000",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          await createReceipt({
            variables: {
              impUid: rsp.imp_uid,
              price: rsp.amount,
              tattooId: info?.id,
            },
          });
        }
      }
    );
  };

  return (
    <D.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <D.MainWrapper>
        <D.Image src="/empty.png" />
        <D.Context>
          <D.ContextHeader>
            <D.Title>{info?.name}</D.Title>
            <D.Title>{info?.price} ₩</D.Title>
          </D.ContextHeader>

          <D.ContextDivisionLine />

          <D.ContextDescription>
            <D.DescriptionTop>
              <D.Text>
                Tattooist: {info?.tattooist.name} @{info?.tattooist.id}
              </D.Text>
              <D.Text>Region: {info?.tattooRegion.region}</D.Text>
              <D.Text>Body Part : {info?.tattooBodypart?.bodypart}</D.Text>
            </D.DescriptionTop>
            <D.Text>{info?.description}</D.Text>

            <D.Text>
              #{info?.tattooMethod?.method} #{info?.tattooGenre?.genre}
            </D.Text>
          </D.ContextDescription>
        </D.Context>
      </D.MainWrapper>

      <D.Purchase onClick={onClickPurchase}>Purchase</D.Purchase>
    </D.Wrapper>
  );
}
