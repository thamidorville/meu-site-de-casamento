import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

const TrajeMadrinhas = ({ onBack }: { onBack: () => void }) => {
  return (
    <VStack spacing={6} align="center" maxW="600px" mx="auto">
    <Button onClick={onBack} colorScheme="purple" mb={4}>
      Voltar ao Carrossel
    </Button>
    <Box textAlign="center">
      <Image
        src="/images/paleta-madrinhas.png"
        alt="traje das madrinhas"
        borderRadius="md"
        mb={4}
      />
      <Text fontSize="2xl" fontWeight="bold">
        Traje das Madrinhas
      </Text>
      <Text fontSize="2xl">
        Madrinhas poderão escolher o modelo que quiser desde que seja na paleta lavanda e liso.
      </Text>
    </Box>
  </VStack>
);

};

export default TrajeMadrinhas;