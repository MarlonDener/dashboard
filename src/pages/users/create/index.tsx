import { RiSaveFill, RiCloseFill } from 'react-icons/ri';

import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react';

import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">
            Criar usuários
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" type="text" label="Nome completo" size="md" />
              <Input name="email" type="email" label="E-mail" size="md" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="password" type="password" label="Senha" size="md" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                size="md"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button
                colorScheme="whiteAlpha"
                size="sm"
                iconSpacing="1"
                leftIcon={<Icon as={RiCloseFill} />}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="pink"
                size="sm"
                leftIcon={<Icon as={RiSaveFill} />}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
