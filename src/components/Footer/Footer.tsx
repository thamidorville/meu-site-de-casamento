"use client";

import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { GiLovers, GiClothes } from "react-icons/gi";
import { MdLocalBar } from "react-icons/md";
import { SlPresent } from "react-icons/sl";
import { FaHotel, FaWhatsapp } from "react-icons/fa";
import NextLink from "next/link";

import { EB_Garamond } from "next/font/google";

const textFooter = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      px={["2rem", "4rem", "6rem", "12rem", "22rem"]}
      bgGradient="linear(to-r, #e6e6fa, #d8bfd8, #d699f5f4, #bdb5d5)"
      animation="gradient 10s ease infinite"
      fontFamily={textFooter.style.fontFamily}
      fontSize="lg"
      mx="auto"
      maxW='100%'
    >
      <Box  textAlign='center'>
        <Text color="gray.600">
          Desenvolvido com muito amor pela noiva.❤️
        </Text>
     
      <SimpleGrid columns={[1, 2]}  >
        <VStack align="start" spacing={2} justifyContent='center'>
          <HStack spacing={2}>
            <Icon as={GiLovers} boxSize={5} color="gray.600" />
            <Link
              as={NextLink}
              href="/casal"
              color="gray.600"
              _hover={{ color: "purple.500" }}
            >
              O Casal
            </Link>
          </HStack>
          <HStack spacing={2}>
            <Icon as={MdLocalBar} boxSize={5} color="gray.600" />
            <Link
              as={NextLink}
              href="/cerimonia"
              color="gray.600"
              _hover={{ color: "purple.500" }}
            >
              Cerimônia e Recepção
            </Link>
          </HStack>
          <HStack spacing={2}>
            <Icon as={SlPresent} boxSize={5} color="gray.600" />
            <Link
              as={NextLink}
              href="/presentes"
              color="gray.600"
              _hover={{ color: "purple.500" }}
            >
              Lista de Presentes
            </Link>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaHotel} boxSize={5} color="gray.600" />
            <Link
              as={NextLink}
              href="/hospedagem"
              color="gray.600"
              _hover={{ color: "purple.500" }}
            >
              Dicas de Hotéis e Pousadas
            </Link>
          </HStack>
          <HStack spacing={2}>
            <Icon as={GiClothes} boxSize={5} color="gray.600" />
            <Link
              as={NextLink}
              href="/dicas"
              color="gray.600"
              _hover={{ color: "purple.500" }}
            >
              Traje do Evento, Cabelo e Maquiagem
            </Link>
          </HStack>
        </VStack>
      </SimpleGrid>
      </Box>
      <Divider my={6} />
      <Text textAlign="center" color="gray.500">
        © 2025 Casamento Thamiris e Vinicius. Todos os direitos reservados.
      </Text>
    </Box>
  
  );
};

export default Footer;
