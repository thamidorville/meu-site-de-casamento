import { Box, Button, Card, CardBody, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const saloes = [
  {
    nome: "Espaço Qualivita",
    img: "/images/qualivita.png",
    endereco: "Av. Delfim Moreira, 509 - Várzea, Teresópolis, RJ",
    telefone: "(21) 2643-2512" 
  },
  {
    nome: "Maria Prado Beauty",
    img: "/images/mariaprado.png",
    endereco: "Rua Tietê, 448 - Bairro de Fátima, Teresópolis - RJ",
    telefone: "(21) 99709-9935" 
  },
  {
    nome: "Gloss Studio de Beleza",
    img: "/images/gloss.png",
    endereco: "Praça Nilo Peçanha, 19 - Loja 23A - Alto - Teresópolis, RJ",
    telefone: "(21) 2642-8313" 
  },
]



const CabeloMaquiagem = ({ onBack }: { onBack: () => void }) => {
  return (
    <VStack spacing={6} align="center" maxW="600px" mx="auto">
      <Button onClick={onBack} colorScheme="purple" mb={4}>
        Voltar ao Carrossel
      </Button>
      <Box textAlign="center">
        <Image
          src="/images/cabelo-maquiagem.png"
          alt="Cabelo e Maquiagem"
          borderRadius="md"
          mb={4}
        />
        <Text fontSize="2xl" fontWeight="bold">
          Cabelo e Maquiagem
        </Text>
        <Text mt={2} color="gray.600" mb={6}>
          Confira maquiadores, espaços e studios de beleza próximos para
          penteados e maquiagem.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing={6} w={["320px", "640px", "1000px"]}>
        {saloes.map((salao, index) => (
          <Card key={index} bg="transparent" shadow="md" borderRadius="md">
            <CardBody textAlign="center">
              <Image
                src={salao.img}
                alt={salao.nome}
                objectFit="cover"
                borderRadius="md"
                height="120px"
                mx="auto"
                mb={4}
              />
              <Text fontWeight="bold">{salao.nome}</Text>
              <Text color="gray.600">{salao.endereco}</Text>
              <Text color="gray.600">{salao.telefone}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default CabeloMaquiagem;

