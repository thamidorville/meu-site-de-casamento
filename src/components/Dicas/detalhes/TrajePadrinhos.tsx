import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

const TrajePadrinhos = ({ onBack }: { onBack: () => void }) => {
  return (
    <VStack spacing={6} align="center" maxW="600px" mx="auto">
      <Button onClick={onBack} colorScheme="purple" mb={4}>
        Voltar ao Carrossel
      </Button>
      <Box textAlign="center">
        <Image
          src="/images/traje-padrinhos.png"
          alt="traje dos padrinhos"
          borderRadius="md"
          mb={4}
        />
        <Text fontSize="2xl" fontWeight="bold">
          Traje dos Padrinhos.
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Padrinhos usarão um terno preto com a gravata na cor lavanda e um
          sapato social.
        </Text>
      </Box>
    </VStack>
  );
};

export default TrajePadrinhos;
