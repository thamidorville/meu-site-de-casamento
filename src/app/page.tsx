"use client";

import { Box, Text, HStack, VStack, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Caroussel from "../components/Caroussel/Caroussel";
import { Gabriela } from "next/font/google";
import Introduction from "@/components/Home/Introduction";
import CardsPage from "@/components/cards/CardsPage";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

const fontTittle = Gabriela({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Home() {
  const targetDate = new Date("2025-09-13T00:00:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Box>
      <Caroussel />

      <Box textAlign="center" mt={2}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          mb={6}
          fontFamily={fontTittle.style.fontFamily}
          color="#4a4a4a"
        >
          Contagem Regressiva
        </Text>
        <HStack spacing={8} justify="center">
          <VStack>
            <Box
              bgGradient="linear(to-b, #c29edb, #9f79d1)"
              color="white"
              borderRadius="2xl"
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
              w="120px"
              h="120px"
              textAlign="center"
              mt={4}
              mb={4}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Text fontSize="5xl" fontWeight="bold" letterSpacing="tight">
                {timeLeft.dias}
              </Text>
              <Text fontSize="sm" mt={1} letterSpacing="wide">
                DIAS
              </Text>
            </Box>
          </VStack>
          <VStack>
            <Box
              bgGradient="linear(to-b, #c29edb, #9f79d1)"
              color="white"
              borderRadius="2xl"
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
              w="120px"
              h="120px"
              textAlign="center"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Text fontSize="5xl" fontWeight="bold" letterSpacing="tight">
                {timeLeft.horas}
              </Text>
              <Text fontSize="sm" mt={1} letterSpacing="wide">
                HORAS
              </Text>
            </Box>
          </VStack>
          <VStack>
            <Box
              bgGradient="linear(to-b, #c29edb, #9f79d1)"
              color="white"
              borderRadius="2xl"
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
              w="120px"
              h="120px"
              textAlign="center"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Text fontSize="5xl" fontWeight="bold" letterSpacing="tight">
                {timeLeft.minutos}
              </Text>
              <Text fontSize="sm" mt={1} letterSpacing="wide">
                MINUTOS
              </Text>
            </Box>
          </VStack>
          <VStack>
            <Box
              bgGradient="linear(to-b, #c29edb, #9f79d1)"
              color="white"
              borderRadius="2xl"
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
              w="120px"
              h="120px"
              textAlign="center"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Text fontSize="5xl" fontWeight="bold" letterSpacing="tight">
                {timeLeft.segundos}
              </Text>
              <Text fontSize="sm" mt={1} letterSpacing="wide">
                SEGUNDOS
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Box>
      <Introduction />
      <Box
        py={10}
        px={[4, 6, 8, 10, 40]}
        maxW="1200px"
        mx="auto"
        textAlign="justify"
      >
        <CardsPage />
      </Box>
    </Box>
  );
}
