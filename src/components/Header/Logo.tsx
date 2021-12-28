import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      pl="4"
    >
      DashMarlon
      <Text color="pink.500" as="span" ml="1">
        .
      </Text>
    </Text>
  );
}
