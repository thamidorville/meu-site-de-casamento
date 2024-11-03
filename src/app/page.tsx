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
          fontSize={["3xl", "4xl", "5xl"]}
          fontWeight="bold"
          mb={6}
          fontFamily={fontTittle.style.fontFamily}
          color="#4a4a4a"
        >
          Contagem Regressiva
        </Text>
        <Flex wrap="wrap" justify="center" gap={[2, 4, 6]}>
          {Object.entries(timeLeft).map(([timeUnit, value]) => (
            <VStack key={timeUnit}>
              <Box
                bgGradient="linear(to-b, #c29edb, #9f79d1)"
                color="white"
                borderRadius="2xl"
                boxShadow="0px 4px 15px rgba(0, 0, 0, 0.1)"
                w={["60px", "80px", "100px", "120px"]} 
                h={["60px", "80px", "100px", "120px"]}
                textAlign="center"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.1)" }}
              >
                <Text
                  fontSize={["md", "xl", "2xl", "3xl"]}
                  fontWeight="bold"
                  letterSpacing="tight"
                  mt={[2, 4, 8]}
                  mb={[2, 2, 2]}
                >
                  {value}
                </Text>
                <Text
                  fontSize={["xx-small", "xs", "sm"]} 
                  letterSpacing="wide"
                  textAlign="center" 
                  whiteSpace="normal"
                  wordBreak="break-word"
                  mb={[2, 4, 1]}
            
                >
                  {timeUnit.toUpperCase()}
                </Text>
              </Box>
            </VStack>
          ))}
        </Flex>
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
