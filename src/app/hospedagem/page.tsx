"use client";

import { hoteisData } from "@/components/hoteis/hoteisData";
import HotelCard from "@/components/hoteis/HotelCard";
import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Hospedagem() {
  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <VStack spacing={8} textAlign='center'>
        <Heading>Dicas de Hotéis e Pousadas</Heading>
        <Image
          src="/images/hotel-principal.png"
          alt="foto de um hotel e uma montanha ao fundo"
          mx="auto"
          px={4}
          py={8}
          maxW={["18rem", "28rem", "58rem"]}
          maxH={["22rem", "32rem", "42rem"]}
          borderRadius="lg"
          boxShadow="lg"
          transition="transform 0.4s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "xl",
          }}
        />
        <Box mx="auto" textAlign="justify" maxW={["420px", "600px", "890px"]}>
          {" "}
          <Text>Queridos amigos e familiares,</Text>
          <Text>
            Estamos cientes de que para alguns de vocês, estar presente em nosso
            casamento em Teresópolis, pode significar uma jornada um tanto
            longa. Entendemos completamente as distâncias e os esforços
            envolvidos, e queremos expressar nossa sincera gratidão pelo apoio e
            dedicação que vocês demonstram ao fazer parte deste momento tão
            especial em nossas vidas. Para facilitar a sua estadia durante esse
            período, reunimos uma lista com dicas de hotéis e pousadas em
            Teresópolis, onde vocês poderão encontrar conforto e comodidade.
            Esperamos que esta lista ajude a tornar sua viagem mais tranquila e
            agradável.
          </Text>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} px={['20px','60px','120px']}>
          {hoteisData.map((hotel, index) => (
            <HotelCard
              key={index}
              nome={hotel.nome}
              endereco={hotel.endereco}
              telefone={hotel.telefone}
              whatsapp={hotel.whatsapp}
              linkReserva={hotel.linkReserva}
              imagem={hotel.imagem}
              cupom={hotel.cupom}
              linkApp={hotel.linkApp}
            ></HotelCard>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
