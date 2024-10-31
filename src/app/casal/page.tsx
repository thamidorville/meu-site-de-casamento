"use client";

import CoupleDescriptionText from "@/components/Casal/CoupleDescriptionText";
import { Box, Image, Text } from "@chakra-ui/react";
import { Gabriela } from "next/font/google";

const fontTittle = Gabriela({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Casal = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        mb={6}
        fontFamily={fontTittle.style.fontFamily}
        color="#4a4a4a"
      >
        O Casal
      </Text>
      <Box textAlign="center" p={12} maxW="1000px" mx="auto" overflow="hidden">
        <Image
          src="/images/foto-ocasal.png"
          alt="Vinicius beijando Thamiris com uma cascata ao fundo"
          mx="auto"
          px={4}
          py={8}
          borderRadius="lg"
          boxShadow="lg"
          transition="transform 0.4s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "xl",
          }}
        />
      </Box>
      <CoupleDescriptionText />
    </Box>
  );
};

export default Casal;
