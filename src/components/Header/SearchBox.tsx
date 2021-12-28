import { RiSearchLine } from 'react-icons/ri';

import { Flex, Input, Icon } from '@chakra-ui/react';

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      position="relative"
      bg="gray.800"
      color="gray.200"
      borderRadius="full"
    >
      <Input
        px="4"
        mr="4"
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} fontSize="18" />
    </Flex>
  );
}
