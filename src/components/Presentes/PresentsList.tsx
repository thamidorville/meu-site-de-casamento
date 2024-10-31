"use client";

import { Box, Text, Image, Flex, Button, Grid } from "@chakra-ui/react";
import PresentearModal from "./PresentearModal";
import { useEffect, useState } from "react";
import { Presente } from "./Presente";
import Carrinho from "./Carrinho";
import { FaShoppingCart } from "react-icons/fa";

const presentesData: Presente[] = [
  {
    id: 1,
    imgSrc: "/images/chopeira.png",
    title: "Chopeira 5 Litros - Heineken",
    price: 1347.01,
  },
  {
    id: 2,
    imgSrc: "/images/massagem.png",
    title: "2 massagens relaxantes no spa do hotel",
    price: 440.00,
  },
  {
    id: 3,
    imgSrc: "/images/passagem.png",
    title: "2 Passagens Aéreas para a Lua de Mel",
    price: 1554.24,
  },
  {
    id: 4,
    imgSrc: "/images/queijosevinhos.png",
    title: "Kit Queijos e Vinhos para uma noite fria em Teresópolis",
    price: 150.0,
  },
  {
    id: 5,
    imgSrc: "/images/toalhadylan.png",
    title: "Toalha Pós-Banho do Dylan - Kit Completo para Cuidados Caninos",
    price: 180.0,
  },
  {
    id: 6,
    imgSrc: "/images/bebe.png",
    title: "Aluguel de um bebê para treinamento",
    price: 250.0,
  },
  {
    id: 7,
    imgSrc: "/images/adegaelectrolux.png",
    title: "Adega de Vinho Climatizada Electrolux 8 garrafas",
    price: 664.05,
  },
  {
    id: 8,
    imgSrc: "/images/jogopanelasbrinox.png",
    title: "Brinox - Jogo de Panelas 5 Peças Ceramic Life Easy",
    price: 435.8,
  },
  {
    id: 9,
    imgSrc: "/images/bomboniere.png",
    title: "Conjunto de Vidros de Cristais Bomboniere e Travessa Oval",
    price: 78.9,
  },
  {
    id: 10,
    imgSrc: "/images/vasodecorativo.png",
    title: "Vaso decorativo de Cerâmica com alças",
    price: 389.9,
  },
  {
    id: 11,
    imgSrc: "/images/toalhasbud.png",
    title: "Jogo de Toalhas + Tapete Antiderrapante Luxo 100% Algodão",
    price: 129.9,
  },
  {
    id: 12,
    imgSrc: "/images/cueca.png",
    title: "Cueca Sexy para a Noite de Núpcias",
    price: 89.9,
  },
  {
    id: 13,
    imgSrc: "/images/barba.png",
    title: "Um Ano de Barba Feita para o noivo",
    price: 310.0,
  },
  {
    id: 14,
    imgSrc: "/images/drinks.png",
    title: "Drinks na Piscina do Hotel",
    price: 79.9,
  },
  {
    id: 15,
    imgSrc: "/images/camacamicado.png",
    title: "Jogo de Cama Queen Camicado",
    price: 99.9,
  },
  {
    id: 16,
    imgSrc: "/images/churrasco.png",
    title: "Kit churrasco profissional",
    price: 94.9,
  },
  {
    id: 17,
    imgSrc: "/images/piquenique.png",
    title: "Piquenique Romântico para os Noivos",
    price: 250.0,
  },
  {
    id: 18,
    imgSrc: "/images/camabox.png",
    title: "Cama Box Queen com Baú e Colchão de Molas",
    price: 1700.0,
  },
  {
    id: 20,
    imgSrc: "/images/vinicola.png",
    title: "Tour Romântico nas Vinícolas",
    price: 300.0,
  },
  {
    id: 21,
    imgSrc: "/images/aparelhojantar.png",
    title: "Aparelho de Jantar - 20 Peças",
    price: 230.00,
  },
  {
    id: 22,
    imgSrc: "/images/lingerie.png",
    title: "Roupa Sexy para a noiva usar na Lua de Mel",
    price: 110.00,
  },
  {
    id: 23,
    imgSrc: "/images/antironco.png",
    title: "Kit Anti-Ronco para a Noiva Dormir com Tranquilidade",
    price: 80.00,
  },
  {
    id: 24,
    imgSrc: "/images/robo.png",
    title: "Robô Aspirador de Pó Electrolux",
    price: 489.00,
  },
  {
    id: 25,
    imgSrc: "/images/cobertor.png",
    title: "Cobertor Gigante 'Aconchego a Dois'",
    price: 140.00,
  },
  {
    id: 26,
    imgSrc: "/images/xicaraspaddy.png",
    title: "Kit Xícaras de Porcelana Paddy'",
    price: 200.00,
  },
  {
    id: 27,
    imgSrc: "/images/champanhe.png",
    title: "Champanhe no Quarto para brindar a Lua de Mel",
    price: 130.00,
  },
  {
    id: 28,
    imgSrc: "/images/fogao.png",
    title: "Fogão Brastemp 6 Bocas Branco",
    price: 1965.55,
  },
];

const PresentsList: React.FC = () => {
  const [carrinho, setCarrinho] = useState<Presente[]>([]);
  const [isCarrinhoVisible, setIsCarrinhoVisible] = useState(false);

  useEffect(() => {
    const savedCarrinho = localStorage.getItem("carrinho");
    if (savedCarrinho) {
      setCarrinho(JSON.parse(savedCarrinho));
    }
  }, []);

  const salvarCarrinho = (carrinhoAtualizado: Presente[]) => {
    setCarrinho(carrinhoAtualizado);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  };

  const adicionarAoCarrinho = (presente: Presente) => {
    const novoCarrinho = [...carrinho, presente];
    salvarCarrinho(novoCarrinho);
  };

  const removerDoCarrinho = (index: number) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    salvarCarrinho(novoCarrinho);
  };

  const toggleCarrinho = () => {
    setIsCarrinhoVisible(!isCarrinhoVisible);
  };

  return (
    <Flex
      flexDirection="column"
      py={10}
      px={[4, 6, 8, 10, 20]}
      mx="auto"
      maxW="1200px"
      alignItems="center"
    >
      <Flex width="100%" justifyContent="flex-end" mb={6}>
        <Button
          onClick={toggleCarrinho}
          leftIcon={<FaShoppingCart />}
          colorScheme="purple"
          mb={4}
        >
          {isCarrinhoVisible
            ? "Adicionar itens"
            : `Ver carrinho (${carrinho.length} presentes)`}
        </Button>
      </Flex>

      {isCarrinhoVisible ? (
        <Carrinho
          isOpen={isCarrinhoVisible}
          onClose={toggleCarrinho}
          carrinho={carrinho}
          onRemoveItem={removerDoCarrinho}
          onAdicionarMaisItens={toggleCarrinho}
        />
      ) : (
        <Box width="100%">
          <Grid
            templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
            gap={6}
            justifyContent="center"
          >
            {presentesData.map((presente) => (
              <Box
                key={presente.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                maxW="sm"
                boxShadow="lg"
                p={4}
                textAlign="center"
                _hover={{
                  transform: "scale(1.05)",
                  transition: "0.3s ease-in-out",
                }}
                mb={10}
              >
                <Image
                  src={presente.imgSrc}
                  alt={presente.title}
                  boxSize="250px"
                  objectFit="cover"
                  mx="auto"
                  mb={4}
                />
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {presente.title}
                </Text>
                <Text fontSize="lg" color="gray.600" mb={4}>
                  R$ {presente.price.toFixed(2)}
                </Text>
                <PresentearModal
                  presente={presente}
                  adicionarAoCarrinho={adicionarAoCarrinho}
                />
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </Flex>
  );
};

export default PresentsList;
