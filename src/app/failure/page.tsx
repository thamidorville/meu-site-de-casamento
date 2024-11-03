import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const FailurePage = () => {
    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh"
            bg="gray.50"
        >
            <VStack spacing={6} align="center" bg="white" p={8} borderRadius="lg" shadow="md">
                <Box boxSize={12} color="red.500">
            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                </Box>
                <Text fontSize="xl" fontWeight="bold" color="red.600">
                    Erro ao tentar realizar pagamento. Por favor, tente novamente ou escolha outro presente!
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

export default FailurePage;

