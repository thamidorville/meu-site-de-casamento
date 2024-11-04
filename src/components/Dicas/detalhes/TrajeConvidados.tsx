import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

const TrajeConvidados = ({ onBack }: { onBack: () => void }) => {
  return (
    <VStack spacing={6} align="center" maxW="600px" mx="auto">
      <Button onClick={onBack} colorScheme="purple" mb={4}>
        Voltar
      </Button>
      <Box textAlign="center">
        <Image
          src="/images/traje-convidados.png"
          alt="traje dos convidados"
          borderRadius="md"
          mb={4}
        />
        <Text fontSize="2xl" fontWeight="bold">
          Traje do Evento: Social Completo.
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Mulheres de vestido longo e homens de terno e gravata.
        </Text>
      </Box>
    </VStack>
  );
};

export default TrajeConvidados;
