import styled from "styled-components/native";

interface feedBackMsgBoxType {
  feedBackMsg: string;
}

const FeedBackMsgBox = ({ feedBackMsg }: feedBackMsgBoxType) => {
  return (
    <Container>
      <P>{feedBackMsg}</P>
    </Container>
  );
};

export default FeedBackMsgBox;

export const Container = styled.View`
  width: 80%;
  height: 60px;
  border: 0.5px solid #4bb543;
  border-radius: 12px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;

export const P = styled.Text`
  color: #4bb543;
`;
