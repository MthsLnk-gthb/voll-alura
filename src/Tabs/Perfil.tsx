import React from "react";
import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../Componentes/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack justifyContent="center" alignItems="center" flex={1} p={5}>
        <Titulo titulo="Meu Perfil" />
        <Avatar
          source={{ uri: "https://github.com/MthsLnk-gthb.png" }}
          mt={5}
          size="xl"
        />
        <Text fontSize={"2xl"} color="blue.500">
          Informações Pessoais:
        </Text>
        <Titulo titulo="Matheus Link" />
        <Text mt={1}>22/03/2005</Text>
        <Text>Curitiba</Text>
        <Divider mt={5} />

        <Text fontSize={"2xl"} color="blue.500" mb={1}>
          Histórico médico:
        </Text>

        <Text>Rinite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
