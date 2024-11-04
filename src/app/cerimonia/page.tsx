"use client";

import { Box, Divider, Image, Text } from "@chakra-ui/react";

export default function Cerimonia() {
  return (
    <Box p={4} maxW="800px" mx="auto" textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Cerimônia e Recepção
      </Text>
      <Image
        src="/images/villa.png"
        alt="Imagem do local da cerimônia"
        borderRadius="md"
        boxShadow="md"
        mb={6}
      />

      <Text fontSize="xl" fontWeight="bold" mb={8}>
        Villa Inesquecível - Teresópolis, RJ
      </Text>

      <Box
        bg="white"
        boxShadow='dark-lg'
        py={4}
        textAlign="center"
        mx={[6, 4, 6, 8]}
        p={[4, 4, 6, 8]}
        fontSize="lg"
        alignItems='center'
        justifyItems='center'
      >
        <Text>Data: 13 de Setembro de 2025</Text>
        <Text>Horário: 15:30h</Text>
        <Text>
          Local: R. Vitória Régia, 475 - Quebra Frascos, Teresópolis - RJ
        </Text>
        <Text>Estacionamento disponível.</Text>
        <Box textAlign="justify" mx={[4, 4, 6, 8]}>
          {" "}
          <Text>
            {" "}
            Cerimônia ao ar livre e festa no mesmo local, com a cerimônia em
            meio à natureza e a festa em ambiente coberto.
          </Text>
        </Box>
      </Box>
      <Divider my={6} />
      <Text fontSize="xl" fontWeight="bold" mb={8}>
        Como Chegar
      </Text>
      <Box
        w="100%"
        maxW={["300px", "500px", "700px", "800px"]}
        h={["200px", "300px", "400px", "500px"]}
        mt={6}
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        textAlign="center"
        mx="auto"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6203.7768706407005!2d-42.99621679342922!3d-22.399355797965406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984db173b47657%3A0xd6c05fe9ca9cd2f4!2sVilla%20Inesquec%C3%ADvel!5e0!3m2!1spt-BR!2sbr!4v1730485575502!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
}
