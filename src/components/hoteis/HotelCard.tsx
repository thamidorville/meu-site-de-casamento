import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

interface HotelCardProps {
  nome: string;
  endereco: string;
  telefone: string;
  whatsapp?: string;
  linkReserva: string;
  imagem: string;
  cupom?: string;
  linkApp?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  nome,
  endereco,
  telefone,
  whatsapp,
  linkReserva,
  imagem,
  cupom,
  linkApp,
}) => {
  return (
    <Card
      shadow="md"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height='100%'
      py={2}
      bg='transparent'
    
    >
      <Image
        src={imagem}
        alt={nome}
        borderTopRadius="md"
        objectFit="cover"
        width="100%"
        height="100%"
        p={4}
      />
      <CardHeader p={3}  textAlign="center">
        <Text fontWeight="bold" fontSize="xl" textAlign="center">
          {nome}
        </Text>
      </CardHeader>
      <CardBody p={3} display="flex" flexDirection="column" alignItems="center" textAlign="center">
        <Text fontSize="sm" mb={1}>{endereco}</Text>
        <Text fontSize="sm">Telefone: {telefone}</Text>
      </CardBody>
      {cupom && (
        <Box
          borderRadius="md"
          mx={4}
          textAlign="center"
        >
          <Text fontWeight="bold" color="purple.600">
            Cupom de Desconto: {cupom}
          </Text>
          <Text fontSize="sm">
            Use este cupom para obter um desconto especial ao reservar!
          </Text>
        </Box>
      )}
      <CardFooter p={2} >
        <HStack spacing={1} wrap="wrap" justifyContent="center">
          <Button
            as="a"
            href={linkReserva}
            target="_blank"
            colorScheme="teal"
            size="sm"
          >
            Reservar Agora
          </Button>
          <Button
            as="a"
            href={`https://wa.me/${whatsapp}`}
            leftIcon={<FaWhatsapp />}
            colorScheme="green"
            size="sm"
          >
            WhatsApp
          </Button>
          {linkApp && (
            <Button
              as="a"
              href={linkApp}
              target="_blank"
              colorScheme="orange"
              size="sm"
              p={2}
            >
              Baixar App e Ganhar mais Desconto
            </Button>
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
