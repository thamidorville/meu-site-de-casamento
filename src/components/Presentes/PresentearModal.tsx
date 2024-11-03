"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Image,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Presente } from "./Presente";

interface PresentearModalProps {
  presente: Presente;
  adicionarAoCarrinho: (presente: Presente) => void;
}

const PresentearModal: React.FC<PresentearModalProps> = ({
  presente,
  adicionarAoCarrinho,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  initMercadoPago("APP_USR-be09c6d0-c857-47de-8137-da7dec4001c8");

  const handleCreatePreference = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.mercadopago.com/checkout/preferences",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer APP_USR-8126142350126278-102413-be0a741893419e6f29dc28bb33b53ccc-290791906`,
          },
          body: JSON.stringify({
            items: [
              {
                title: presente.title,
                quantity: 1,
                currency_id: "BRL",
                unit_price: presente.price,
              },
            ],
            back_urls: {
              success: "https://thamirisevinicius.com.br/success",
              failure: "https://thamirisevinicius.com.br/failure",
              pending: "https://thamirisevinicius.com.br/pending",
            },
            auto_return: "approved",
          }),
        }
      );

      const data = await response.json();
      if (data.id) {
        window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;
      } else {
        console.error("Erro ao criar a preferência de pagamento.");
      }
    } catch (error) {
      console.error("Erro ao criar a preferência de pagamento", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button colorScheme="purple" variant="solid" onClick={onOpen}>
        Presentear
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          borderRadius="xl"
          bgGradient="linear(to-r, #ad91ad, #e6e6fa)"
        >
          <ModalHeader fontSize="2xl" color="gray.800">
            Confirmar Presente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign="center">
              <Image
                src={presente.imgSrc}
                alt={presente.title}
                boxSize="200px"
                objectFit="cover"
                mx="auto"
                mb={4}
              />
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {presente.title}
              </Text>
              <Text fontSize="lg" color="gray.600">
                Valor: R$ {presente.price.toFixed(2)}
              </Text>
            </Box>
            <Box mt={6} textAlign="center">
              <HStack spacing={4} justifyContent="center" wrap="wrap">
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={() => {
                    adicionarAoCarrinho(presente);
                    onClose();
                  }}
                >
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="purple"
                  onClick={handleCreatePreference}
                  isLoading={loading}
                >
                  Finalizar Compra
                </Button>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default PresentearModal;
