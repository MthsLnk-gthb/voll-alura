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
import { EntradaTexto } from "./Componentes/EntradaTexto";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo titulo="Faça Login em sua conta !" />
      <Box>
        <EntradaTexto label="Email" placeholder="Insira seu email" />
        <EntradaTexto label="Senha" placeholder="Insira uma senha"/>
      </Box>
      <Button w="100%" bg="blue.800" mt="10" borderRadius="lg">
        Entrar
      </Button>
      <Link href="https://alura.com.br" mt="2">
        Esqueceu sua senha ?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt="8">
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
