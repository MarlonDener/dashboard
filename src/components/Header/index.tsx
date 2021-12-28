import React from 'react';
import { RiMenuLine } from 'react-icons/ri';

import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justifyContent="space-around"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          aria-label="Open navigation"
          variant="unstyled"
          onClick={onOpen}
          mr="-2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
