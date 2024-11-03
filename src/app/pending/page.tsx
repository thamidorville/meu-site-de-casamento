import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const PendingPage = () => {
    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh"
            bg="gray.50"
        >
            <VStack spacing={6} align="center" bg="white" p={8} borderRadius="lg" shadow="md">
                <Box boxSize={12} color="orange.500">
               
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                </Box>
                <Text fontSize="xl" fontWeight="bold" color="orange.600">
                    Pagamento pendente! Por favor, aguarde a confirmação do pagamento.
                </Text>
                <Link href="/" passHref>
                    <Button colorScheme="teal">
                        Ir para a Página Inicial
                    </Button>
                </Link>
                <Link href="/presentes" passHref>
                    <Button colorScheme="teal" variant="outline">
                        Ir para a Lista de Presentes
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
}

export default PendingPage;


