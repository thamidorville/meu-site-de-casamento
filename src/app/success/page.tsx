import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const SuccessPage = () => {
    return (
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh"
            bg="gray.50"
        >
            <VStack spacing={6} align="center" bg="white" p={8} borderRadius="lg" shadow="md">
                <Box boxSize={12} color="green.500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.59L5.41 12 4 13.41l6 6 12-12L20.59 6l-10 10.59z"/>
                    </svg>
                </Box>
                <Text fontSize="xl" fontWeight="bold" color="green.700">
                    Pagamento Realizado com Sucesso!
                </Text>
                <Link href="/" passHref>
                    <Button colorScheme="teal">
                        Ir para a Página Inicial
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
}

export default SuccessPage;

