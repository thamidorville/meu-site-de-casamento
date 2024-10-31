"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { Gabriela } from "next/font/google";
import React from "react";

const fontDescription = Gabriela({
  weight: ["400", "400"],
  subsets: ["latin"],
});
export default function PresentsDescriptionText() {
  return (
    <Box
      py={10}
      px={[4, 6, 8, 10, 40]}
      maxW="1200px"
      mx="auto"
      fontFamily={`${fontDescription.style.fontFamily} !important`}
      textAlign="justify"
    >
      <VStack align="stretch" spacing={4}>
        {" "}
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Queridos amigos e familiares, 
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Embora já vivamos juntos, somente agora
          estamos conseguindo dar o passo de conquistar nosso próprio cantinho,
          com nossas coisinhas, como se estivéssemos começando do zero a
          construir nossa convivência. Essa nova fase é um sonho realizado!
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Se quiserem nos presentear e fazer parte desse momento tão especial,
          criamos uma lista de presentes com muito carinho. Sintam-se à vontade
          para escolher algo e deixar uma mensagem que vai aquecer ainda mais
          nossos corações.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Mas o que realmente importa para nós é ter a presença de vocês na
          nossa cerimônia e festa, comemorando nossas conquistas, depois de
          tanto tempo acompanhando nosso esforço para crescer.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Agradecemos por todo o amor e apoio. Thamiris e Vinicius.
        </Text>
      </VStack>
    </Box>
  );
}
