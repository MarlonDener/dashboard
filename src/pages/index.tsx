import { SubmitHandler, useForm, ErrorOption } from 'react-hook-form';

import { Flex, Button, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../components/Form/Input';

type SignFormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha é obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });
  const handleSignIn: SubmitHandler<SignFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="2">
          <Input
            label="E-mail"
            {...register('email')}
            error={formState.errors.email}
          />
          <Input type="password" label="Senha" {...register('password')} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          error={formState.errors.password}
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
