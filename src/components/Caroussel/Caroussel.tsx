"use client";

import { Image, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styled from "@emotion/styled";

const imagens = [
  "/images/save-the-date-thamiris-e-vinicius.png",
  "/images/tere.png",
  "/images/villa.png",
];

const CustomSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #e491ecad; // Bolinhas brancas
    opacity: 0.8;
  }

  .swiper-pagination-bullet-active {
    background-color: #f1c40f; // Bolinha ativa em dourado
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #c865d3b7; // Setas brancas
    transition: color 0.3s;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #f1c40f; // Setas douradas ao passar o mouse
  }
`;

const Caroussel = () => {
  return (
    <Flex alignContent="center" alignItems="center" justifyContent="center">
      <Box
        w="100vw"
        h={["40vh", "60vh", "80vh"]} 
        position="relative"
        overflow="hidden"
        py={3}
      >
        <CustomSwiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }} // Habilita a paginação
          navigation={true} // Habilita a navegação (setas)
          spaceBetween={50} // Espaço entre os slides
          slidesPerView={1} // Quantos slides por vez
          loop={true} // Deixa o carrossel em loop infinito
          autoplay={{ delay: 5000 }} // Adiciona autoplay suave
          style={{ width: "100%", height: "100%" }} // O Swiper ocupa 100% da largura e altura
        >
          {imagens.map((url, index) => (
            <SwiperSlide key={index}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="100%" 
                w="100%"
                bg="transparent"
              >
                <Image
                  src={url}
                  alt={`Imagem ${index + 1}`}
                  objectFit="contain"
                  maxW="100%"
                  maxH="100%"
                />
              </Box>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Box>
    </Flex>
  );
};

export default Caroussel;
