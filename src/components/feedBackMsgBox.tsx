import styled from "styled-components/native";

interface styledType {
  type: string;
}

interface feedBackMsgBoxType {
  feedBackMsg: string;
  type: string;
}

const FeedBackMsgBox = ({ feedBackMsg, type }: feedBackMsgBoxType) => {
  return (
    <Container type={type}>
      <P type={type}>{feedBackMsg}</P>
    </Container>
  );
};

export default FeedBackMsgBox;

export const Container = styled.View<styledType>`
  width: 80%;
  height: 60px;
  border: 0.5px solid
    ${({ type, theme }) =>
      type === "success" ? "#4bb543" : theme.pallete.common.errorColor};
  border-radius: 12px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;

export const P = styled.Text<styledType>`
  color: ${({ type, theme }) =>
    type === "success" ? "#4bb543" : theme.pallete.common.errorColor};
`;
