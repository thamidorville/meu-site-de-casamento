"use client";

import CarrosselBeleza from "@/components/Dicas/carrosselBeleza/CarrosselBeleza";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const DicasDeBeleza = () => {
  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <Box mx="auto" textAlign="justify" maxW={["420px", "600px", "890px"]}>
        <Heading mt={4} textAlign="center" my={8}>
          Dicas de Beleza
        </Heading>
        <Text>Queridos amigos e familiares,</Text>
        <VStack spacing={8} textAlign="justify">
          <Text mt={4} my={8} mb={12}>
            Para o nosso grande dia, o traje é social completo: vestidos longos
            para as convidadas e terno com gravata para os convidados. Queremos
            que todos se sintam elegantes! Confira abaixo dicas de salões de
            beleza em Teresópolis e sugestões de trajes para inspirá-los.
          </Text>
        </VStack>
      </Box>
      <CarrosselBeleza />
    </Box>
  );
};

export default DicasDeBeleza;
