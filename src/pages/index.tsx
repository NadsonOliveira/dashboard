import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/form/Input";
export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="8">
          <Input name="email" type="email" label="email" />
          <Input name="password" type="password" label="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="green">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
