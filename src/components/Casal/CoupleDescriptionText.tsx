"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { Gabriela } from "next/font/google";
import React from "react";

const fontDescription = Gabriela({
  weight: ["400", "400"],
  subsets: ["latin"],
});
export default function CoupleDescriptionText() {
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
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          A história de Thamiris e Vinicius começou em uma noite comum na
          faculdade. Vinicius estava com Pedro, entre risadas na sacada, quando
          uma figura surgiu, vestida toda de preto como uma verdadeira gótica.
          Ela acendeu um cigarro e se debruçou na sacada, capturando a atenção
          de Vinicius imediatamente. Pedro, amigo em comum, cumprimentou a
          garota, que retribuiu o gesto, terminou seu cigarro e desapareceu.
          "Quem era aquela?" perguntou Vinicius. "Thamiris, minha amiga,"
          respondeu Pedro. Desde então, Vinicius não conseguia tirá-la da
          cabeça, mas demorou muito para que finalmente conversassem.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          O destino, entretanto, reservou um reencontro virtual. Depois de um
          longo tempo, eles se encontraram no Tinder. A afinidade foi
          instantânea, com Vinicius rindo de cada palavra que Thamiris dizia
          enquanto conversavam.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Finalmente, o primeiro encontro aconteceu. Vinicius correu para
          buscá-la, e juntos foram jantar em um bar em frente à praia. Uma banda
          de rock tocava naquela noite. Quando a conversa diminuía, os dois
          cantavam juntos e se olhavam, enquanto dobravam tsurus, simbolizando
          sorte na cultura japonesa. Thamiris falava sem parar, enquanto
          Vinicius, tímido, a observava com admiração.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Após o jantar, sentaram-se em um banco, com vista para a orla. Com o
          coração disparado, Vinicius falou: "Está faltando uma coisa... você
          ainda não me deu um beijo." Naquele momento, eles se aproximaram e
          compartilharam seu primeiro beijo, dando início a uma jornada de amor
          que estava apenas começando.
        </Text>
        <Text fontSize="lg" lineHeight="1.5" mb={4}>
          Desde então, seu relacionamento floresceu, passando do namoro à
          convivência, compartilhando inúmeras experiências. Agora, estão
          prestes a trocar alianças e celebrar sua união, um testemunho do amor
          que encontraram um no outro e que continuará a crescer eternamente.{" "}
        </Text>
      </VStack>
    </Box>
  );
}
