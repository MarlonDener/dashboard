import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px={['4', '4', '6']}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Marlon Dener</Text>
                    <Text fontSize="sm" color="gray.300">
                      marlon.dener@voltbras.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td px={['4', '4', '6']}>11/05/2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="none"
                      borderWidth={1}
                      borderColor="gray.100"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      {isWideVersion ? 'Editar' : ''}
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Marlon Dener</Text>
                    <Text fontSize="sm" color="gray.300">
                      marlon.dener@voltbras.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td px={['4', '4', '6']}>11/05/2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="none"
                      borderWidth={1}
                      borderColor="gray.100"
                      leftIcon={<Icon as={RiPencilLine} />}
                    />
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Marlon Dener</Text>
                    <Text fontSize="sm" color="gray.300">
                      marlon.dener@voltbras.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td px={['4', '4', '6']}>11/05/2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="small"
                      colorScheme="none"
                      borderWidth={1}
                      borderColor="gray.100"
                      leftIcon={<Icon as={RiPencilLine} />}
                    />
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
