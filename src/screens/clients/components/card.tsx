import styled from "styled-components/native";

interface cardType {
  description: string;
  value: string;
  paymentOptions: string;
  currency: string;
  tag: string;
}

const Card = ({
  description,
  value,
  paymentOptions,
  currency,
  tag,
}: cardType) => {
  return (
    <CardBox>
      <CardHeader>
        <Description>{description}</Description>
      </CardHeader>

      <CardBody>
        <CardRow>
          <P>Valor</P>
          <P>{value}</P>
        </CardRow>

        <CardRow>
          <P>Método de pagamento</P>
          <P>{paymentOptions}</P>
        </CardRow>

        <CardRow>
          <P>Moeda</P>
          <P>{currency}</P>
        </CardRow>

        <CardRow>
          <P>Tag</P>
          <P>{tag}</P>
        </CardRow>
      </CardBody>
    </CardBox>
  );
};

const CardBox = styled.View`
  width: 100%;
  height: auto;
  background-color: #fff;
  elevation: 4;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const CardHeader = styled.View`
  elevation: 2;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

export const P = styled.Text``;

export const Description = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.contrastText};
`;

const CardBody = styled.View`
  padding: 12px;
`;

const CardRow = styled.View`
  border-bottom: 1px solid black;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
`;

export default Card;
