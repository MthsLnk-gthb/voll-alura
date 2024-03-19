import {
  Image,
  Text,
  VStack,
  Box,
  FormControl,
  Input,
  Button,
  Link
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./Componentes/Titulo";

export default function Cadastro() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo titulo="Faça seu Cadastro !"/>
      <Box>
        <FormControl mt="3">
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Insira seu Email"
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
          />
        </FormControl>
        <FormControl mt="3">
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder="Insira sua senha"
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button w="100%" bg="blue.800" mt="10" borderRadius="lg">
        Entrar
      </Button>
      <Link href="https://alura.com.br" mt="2">Esqueceu sua senha ?</Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt="8">
        <Text>Já possui conta? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça o Login</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
