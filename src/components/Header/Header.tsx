"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
export default function Header() {
  return (
    <Box
      as="header"
      bg="white"
      boxShadow="sm"
      py={4}
      position="sticky"
      top={0}
      zIndex={1000}
      fontSize='6x1'
   
    >
      <Flex maxW="1200px" mx="auto" justify="center" gap={["25px","35px", "50px"]} align="center" flexWrap='wrap'>
        <Link
          as={NextLink}
          href="/"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Home
        </Link>
        <Link
          as={NextLink}
          href="/casal"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          O Casal
        </Link>
        <Link
          as={NextLink}
          href="/cerimonia"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Cerimônia e Recepção
        </Link>
        <Link
          as={NextLink}
          href="/presentes"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Lista de Presentes
        </Link>
        <Link
          as={NextLink}
          href="/hospedagem"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Hospedagem
        </Link>
        <Link
          as={NextLink}
          href="/dicas"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Dicas de Beleza
        </Link>
      </Flex>
    </Box>
  );
}
