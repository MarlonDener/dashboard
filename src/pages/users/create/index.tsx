import { SubmitHandler, useForm } from 'react-hook-form';
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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../../components/Form/Input';
import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'No minímo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function UserList() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolver) => setTimeout(resolver, 2000));
    return values;
  };
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuários
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="text"
                label="Nome completo"
                size="md"
                {...register('name')}
                error={formState.errors.name}
              />
              <Input
                type="email"
                label="E-mail"
                size="md"
                {...register('email')}
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="password"
                label="Senha"
                size="md"
                {...register('password')}
                error={formState.errors.password}
              />
              <Input
                type="password"
                label="Confirmação da senha"
                size="md"
                {...register('password_confirmation')}
                error={formState.errors.password_confirmation}
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
                type="submit"
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
