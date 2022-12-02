import styled from "styled-components/native";
import FeedBackMsgBox from "./feedBackMsgBox";
import { TouchableNativeFeedback } from "react-native";

interface defaultModalType {
  children: React.ReactNode;
  setOpenModal: (state: boolean) => void;
  feedBack: {
    status: boolean;
    type: string;
    payload: string;
  };
}

const DefaultModal = ({
  children,
  setOpenModal,
  feedBack,
}: defaultModalType) => {
  return (
    <TouchableNativeFeedback onPress={() => setOpenModal(false)}>
      {feedBack.status ? (
        <Container>
          <FeedBackBox>
            <FeedBackMsgBox
              feedBackMsg={feedBack.payload}
              type={feedBack.type}
            />
          </FeedBackBox>
        </Container>
      ) : (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </TouchableNativeFeedback>
  );
};

export default DefaultModal;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px;
`;

const Box = styled.View`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const FeedBackBox = styled(Box)`
  padding: 24px;
`;
