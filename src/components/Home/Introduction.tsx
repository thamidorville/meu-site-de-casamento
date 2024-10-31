"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { Gabriela, Playfair_Display_SC } from "next/font/google";
import React from "react";

const fontDescription = Gabriela({
  weight: ["400", "400"],
  subsets: ["latin"],
});
export default function Introduction() {
  return (
    <Box
      py={10}
      px={[4, 6, 8, 10, 40]}
      maxW="1200px"
      mx="auto"
      fontFamily={fontDescription.style.fontFamily}
      textAlign="justify" 
    >
      <VStack align="stretch" spacing={4}>
        {" "}
        
        <Text textAlign='center' fontSize="2xl" fontWeight="bold" lineHeight="1.5">
          Queridos amigos e familiares,
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Com imensa alegria, anunciamos que, após algum tempo juntos, vamos
          oficializar nossa união. 
        </Text>

        <Text fontSize="lg" lineHeight="1.5" mb={4}>Este é um sonho realizado: uma cerimônia de
          troca de alianças e uma festa inesquecível, com todos vocês que são
          tão importantes para nós.</Text>

        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Durante esses anos, crescemos e amadurecemos lado a lado. Agora,
          queremos selar nosso amor com uma cerimônia especial.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Criamos esse site para compartilhar com vocês os detalhes da
          organização do nosso casamento. Estamos muito felizes e contamos com a
          presença de cada um para tornar esse dia ainda mais incrível!
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Aqui vocês encontrarão também dicas para{" "}
          <Text as="span" fontWeight="bold">
            hospedagem, salão de beleza, trajes, estacionamento, etc.
          </Text>
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Ah, é importante também{" "}
          <Text as="span" fontWeight="bold">
            confirmar sua presença no convite!
          </Text>
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Para nos presentear, escolha qualquer item da Lista de Casamento.
          Fiquem à vontade! Aguardamos vocês no nosso grande dia!
        </Text>
      </VStack>
    </Box>
  );
}
