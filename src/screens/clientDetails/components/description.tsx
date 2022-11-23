import styled from "styled-components/native";

export default function Description({ clientInfo }: any) {
  return (
    <Container>
      <Box>
        <P>Nome:</P>
        <D>{clientInfo.client_name}</D>
      </Box>
      <Box>
        <P>Telefone de contato:</P>
        <D>{clientInfo.client_touch}</D>
      </Box>
      <Box>
        <P>Rua: </P>
        <D>{clientInfo.client_street}</D>
      </Box>
      <Box>
        <P>Quadra: </P>
        <D>{clientInfo.client_apartament}</D>
      </Box>

      <Box>
        <P>Casa:</P>
        <D>{clientInfo.client_block}</D>
      </Box>
    </Container>
  );
}

const Container = styled.View`
  padding: 24px;
`;

const Box = styled.View`
  margin-bottom: 12px;
`;

const P = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

const D = styled.Text`
  margin-left: 4px;
`;
