import { Flex, Text, Avatar, Box } from '@chakra-ui/react';

interface Props {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: Props) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marlon Dener</Text>
          <Text color="gray.300" fontSize="small">
            m.dener01@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="marlon dener lima" />
    </Flex>
  );
}
