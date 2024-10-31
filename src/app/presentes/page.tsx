"use client";

import PresentsDescriptionText from "@/components/Presentes/PresentsDescriptionText";
import PresentsList from "@/components/Presentes/PresentsList";
import { Box, Heading, Text } from "@chakra-ui/react";

const ListaPresentes = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading
        fontSize="4xl"
        fontWeight="bold"
        mb={6}
        color="#4a4a4a"
      >
        Lista de Presentes
      </Heading>
      <PresentsDescriptionText />

      <PresentsList />
    </Box>
  );
};

export default ListaPresentes;
