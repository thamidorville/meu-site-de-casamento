"use client";

import CarrosselBeleza from "@/components/Dicas/carrosselBeleza/CarrosselBeleza";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const DicasDeBeleza = () => {
  return (
    <Box maxW="1200px" mx="auto" p={8}  >
      <Box mx="auto" textAlign="justify"  maxW={["420px", "600px", "890px"]}>
        <Heading mt={4} textAlign="center" my={8}>
          Dicas de Beleza
        </Heading>
        <Text >Queridos amigos e familiares,</Text>
        <VStack spacing={8} textAlign="justify">
          <Text mt={4} my={8} mb={12}>
            Para o nosso grande dia, o traje será social completo: convidadas em
            vestidos longos e convidados de terno e gravata. Queremos que todos
            se sintam confortáveis e elegantes! Selecionamos algumas dicas de
            salões de beleza em Teresópolis e sugestões de trajes para
            inspirá-los. Naveguem pelo carrossel e descubram detalhes de cada
            opção para arrasarem na celebração!
          </Text>
        </VStack>
      </Box>
      <CarrosselBeleza />
    </Box>
  );
};

export default DicasDeBeleza;
