"use client";

import { Box, Text, Flex } from "@chakra-ui/react";
import { Card } from "flowbite-react";
import { Gabriela } from "next/font/google";
import Image from "next/image";

const fontTittle = Gabriela({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const cardsData = [
  {
    imgSrc: "/images/card-casal.png",
    title: "O Casal",
    description: "Conheça a nossa história.",
    href: "/casal",
  },
  {
    imgSrc: "/images/card-local.png",
    title: "Cerimônia e Festa",
    description: "Local e horário.",
    href: "/cerimonia",
  },
  {
    imgSrc: "/images/card-presentes.png",
    title: "Lista de Presentes",
    description: "Presentear os noivos.",
    href: "/presentes",
  },
  {
    imgSrc: "/images/card-hospedagem.png",
    title: "Hospedagem",
    description: "Hotéis e pousadas disponíveis.",
    href: "/hospedagem",
  },
  {
    imgSrc: "/images/card-beleza.png",
    title: "Dicas de Beleza",
    description: "Traje, cabelo e maquiagem.",
    href: "/dicas",
  },
];

const CardsPage = () => {
  return (
    <Flex
      wrap="wrap" 
      justifyContent="center" 
      gap={6} 
      mt={8}
      px={["1rem", "2rem", "3rem", "4rem"]} 
      mx="auto" 
      mb={10}
    >
      {cardsData.map((card, index) => (
        <Box
          key={index}
          as="a"
          href={card.href}
          _hover={{ textDecoration: "none", transform: "scale(1.05)" }} 
          transition="transform 0.2s ease"
          maxW="300px" 
          flex="1 1 300px" 
          mx="auto"
        >
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                width={500}
                height={500}
                src={card.imgSrc}
                alt={card.title}
              />
            )}
          >
            <Text
              textAlign="center"
              fontFamily={fontTittle.style.fontFamily}
              as="h5"
              fontSize="2xl"
              fontWeight="bold"
              color="gray.900"
            >
              {card.title}
            </Text>
            <Text
              textAlign="center"
              fontFamily={fontTittle.style.fontFamily}
              fontSize="md"
              color="gray.700"
            >
              {card.description}
            </Text>
          </Card>
        </Box>
      ))}
    </Flex>
  );
};

export default CardsPage;
