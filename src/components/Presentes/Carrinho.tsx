"use client";

import {
  Box,
  Text,
  Button,
  HStack,
  VStack,
  Image,
  Divider,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { Presente } from "./Presente";

interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
  carrinho: Presente[];
  onRemoveItem: (index: number) => void;
  onAdicionarMaisItens: () => void;
}

const Carrinho: React.FC<CarrinhoProps> = ({
  isOpen,
  onClose,
  carrinho,
  onRemoveItem,
  onAdicionarMaisItens,
}) => {
  // const [preferenceId, setPreferenceId] = useState<string | null>(null);
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
            items: carrinho.map((presente) => ({
              title: presente.title,
              quantity: 1,
              currency_id: "BRL",
              unit_price: presente.price,
            })),
            back_urls: {
              success: "http://localhost:3000/success",
              failure: "http://localhost:3000/failure",
              pending: "http://localhost:3000/pending",
            },
            auto_return: "approved",
          }),
        }
      );

      const data = await response.json();
      if (data.id) {

        // setPreferenceId(data.id);
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
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Meu Carrinho</DrawerHeader>

        <DrawerBody>
          {carrinho.length > 0 ? (
            <VStack spacing={4} align="stretch">
              {carrinho.map((item, index) => (
                <HStack key={index} spacing={4} justify="space-between">
                  <Image src={item.imgSrc} alt={item.title} boxSize="60px" />
                  <Box>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text>R$ {item.price.toFixed(2)}</Text>
                  </Box>
                  <IconButton
                    aria-label="Remover"
                    icon={<CloseIcon />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => onRemoveItem(index)}
                  />
                </HStack>
              ))}
              <Divider />
              <Box textAlign="center" w="100%" mt={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Total: R${" "}
                  {carrinho.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </Text>
              </Box>

              <Box display="flex" justifyContent="center" gap={4} flexWrap='wrap'>
                <Button onClick={onAdicionarMaisItens} colorScheme="gray" width={["100%", "auto"]}>
                  Adicionar mais itens
                </Button>
                <Button
                  colorScheme="pink"
                  onClick={handleCreatePreference}
                  isLoading={loading}
                  width={["100%", "auto"]}
                >
                  Continuar compra
                </Button>
              </Box>
            </VStack>
          ) : (
            <Text fontSize="lg" textAlign="center" mt={4}>
              Seu carrinho está vazio.
            </Text>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Carrinho;
