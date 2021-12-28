import { ElementType } from 'react';

import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

interface Props extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="2" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
