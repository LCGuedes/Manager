import { Text } from "react-native";

export default function Description({ clientInfo }: any) {
  return (
    <>
      <Text>{clientInfo.name}</Text>
      <Text>{clientInfo.touch}</Text>
      <Text>{clientInfo.street}</Text>
      <Text>{clientInfo.apartament}</Text>
      <Text>{clientInfo.block}</Text>
    </>
  );
}
