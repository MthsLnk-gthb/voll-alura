import {
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
  Checkbox,
  ScrollView,
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./Componentes/Titulo";
import { EntradaTexto } from "./Componentes/EntradaTexto";
import { Botao } from "./Componentes/Botao";
import { useState } from "react";
import { secoes } from "./Utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

 
  //Funções//
  const avancarSecao = () => {
    numSecao < secoes.length - 1 ? setNumSecao(numSecao + 1) : null;
  };

  const voltarSecao = () => {
    numSecao > 0 ? setNumSecao(numSecao - 1) : null;
  };

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Titulo titulo={secoes[numSecao].titulo} />
      <Box>
        {secoes[numSecao]?.entradaTexto?.map((entrada) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
            />
          );
        })}
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb="2">
          Selecione o plano:
        </Text>
        {secoes[numSecao].checkbox.map((checkbox) => {
          return (
            <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          );
        })}
      </Box>
      <Botao
        corDeFundo="blue.800"
        margemTopo="10"
        margemBottom="0"
        funcaoDoBotao={avancarSecao}
        conteudo="Avançar"
      />

      {numSecao > 0 && (
        <Botao
          corDeFundo="gray.400"
          margemTopo="4"
          margemBottom="20"
          funcaoDoBotao={voltarSecao}
          conteudo="Voltar"
        />
      )}
    </ScrollView>
  );
}
