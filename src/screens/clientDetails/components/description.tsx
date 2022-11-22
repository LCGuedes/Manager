import { Text } from "react-native";

export default function Description({ clientInfo }: any) {
  return (
    <>
      <Text>{clientInfo.client_name}</Text>
      <Text>{clientInfo.client_touch}</Text>
      <Text>{clientInfo.client_street}</Text>
      <Text>{clientInfo.client_apartament}</Text>
      <Text>{clientInfo.client_block}</Text>
    </>
  );
}
