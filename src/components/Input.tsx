import styled from "styled-components/native";

interface inputTypes {
  value?: string;
  onBlur?: any;
  onChangeText?: any;
  secureTextEntry?: any;
}

const RootInput = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.pallete.primary.main};
  margin-bottom: 12px;
`;

const Input = ({
  value,
  onBlur,
  onChangeText,
  secureTextEntry,
}: inputTypes) => {
  return (
    <RootInput
      secureTextEntry={secureTextEntry}
      value={value}
      onBlur={onBlur}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
