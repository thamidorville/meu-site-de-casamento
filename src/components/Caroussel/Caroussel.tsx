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
    background-color: #e491ecad; 
    opacity: 0.8;
  }

  .swiper-pagination-bullet-active {
    background-color: #f1c40f; 
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #c865d3b7; 
    transition: color 0.3s;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #f1c40f; 
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
          pagination={{ clickable: true }} 
          navigation={true} 
          spaceBetween={50} 
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }} 
          style={{ width: "100%", height: "100%" }} 
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
