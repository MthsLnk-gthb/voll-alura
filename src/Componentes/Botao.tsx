import { Button, Text } from "native-base";

interface BotaoProps {
  conteudo: string;
  funcaoDoBotao: ()=> void;
  corDeFundo: string
  margemTopo: string
  margemBottom: string
}

export function Botao({ conteudo, funcaoDoBotao, corDeFundo, margemTopo, margemBottom }: BotaoProps) {
  return (
    <Button onPress={() => funcaoDoBotao()} w="100%" backgroundColor={corDeFundo} mt={margemTopo} mb={margemBottom} borderRadius="lg">
      <Text fontSize="md" color="#fff" >{conteudo}</Text>
    </Button>
  );
}
