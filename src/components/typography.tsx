import styled from "styled-components/native";
import { theme } from "../theme";

interface Props {
  fontSize?: string;
  fontColor?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  label: String;
}

interface styledProps {
  fontSize?: string;
  fontColor?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
}

const RootTypography = styled.Text<styledProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  color: ${(props) => props.fontColor || theme.pallete.primary.contrastText};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
`;

export default function Typography({
  label,
  fontSize,
  fontColor,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
}: Props) {
  return (
    <RootTypography
      fontSize={fontSize}
      fontColor={fontColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
    >
      {label}
    </RootTypography>
  );
}
