import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

interface buttonType {
  onPress: () => any;
  description?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const RootButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  width: 288px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius};
  elevation: 4;
`;

const P = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.contrastText};
  font-size: ${({ theme }) => theme.fontSize};
`;

const Button = ({ onPress, description, disabled, loading }: buttonType) => {
  return (
    <RootButton onPress={onPress} disabled={disabled}>
      {loading ? <ActivityIndicator color="white" /> : <P>{description}</P>}
    </RootButton>
  );
};

export default Button;
