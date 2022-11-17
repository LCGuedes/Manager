import styled from "styled-components/native";
import Typography from "./typography";

interface headerTypes {
  label: string;
}

const Header = ({ label }: headerTypes) => {
  return (
    <Container>
      <Typography label={label} fontSize="20px" />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({ theme }) => theme.pallete.primary.main};
  width: 100%;
  height: 72px;
  elevation: 8;
  padding-left: 12px;
  justify-content: center;
`;

export default Header;
