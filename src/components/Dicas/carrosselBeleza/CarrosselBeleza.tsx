import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectCoverflow } from "swiper/modules";
import styled from "@emotion/styled";
import { useState } from "react";
import CabeloMaquiagem from "../detalhes/CabeloMaquiagem";
import TrajeConvidados from "../detalhes/TrajeConvidados";
import TrajePadrinhos from "../detalhes/TrajePadrinhos";
import TrajeMadrinhas from "../detalhes/TrajeMadrinhas";

const temas = [
  {
    id: "1",
    title: "Cabelo e Maquiagem",
    img: "/images/cabelo-maquiagem.png",
  },
  {
    id: "2",
    title: "Traje dos Convidados",
    img: "/images/traje-convidados.png",
  },
  {
    id: "3",
    title: "Traje dos Padrinhos",
    img: "/images/traje-padrinhos.png",
  },
  {
    id: "4",
    title: "Traje das Madrinhas",
    img: "/images/traje-madrinhas.png",
  },
];
const CustomSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #c865d3b7; /* Cor dos dots */
    opacity: 0.7;
    width: 12px;
    height: 12px;
  }
  .swiper-pagination-bullet-active {
    background-color: #f1c40f; /* Cor do dot ativo */
  }
`;


const CarrosselBeleza = () => {

    const [selectedTema, setSelectedTema] = useState<string | null>(null)

    const handleSlideClick = (id: string) => {
      setSelectedTema(id)
    }

    const handleBackToCarousel = () => {
      setSelectedTema(null)
    }

    if (selectedTema) {
      switch (selectedTema) {
        case "1":
          return <CabeloMaquiagem onBack={handleBackToCarousel} />;
        case "2":
          return <TrajeConvidados onBack={handleBackToCarousel} />;
        case "3":
          return <TrajePadrinhos onBack={handleBackToCarousel} />;
        case "4":
          return <TrajeMadrinhas onBack={handleBackToCarousel} />;
        default:
          return null;
      }
    }
    return (
      <Flex justify="center" align="center" py={6}>
        <Box maxW={{ base: "100%", md: "600px", lg: "800px" }} w="100%" overflow="hidden">
          <CustomSwiper
           effect="coverflow"
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={3}
           spaceBetween={20}
           coverflowEffect={{
             rotate: 30,
             stretch: 10,
             depth: 150,
             modifier: 1,
             slideShadows: false,
           }}
           pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {temas.map((slide) => (
              <SwiperSlide key={slide.id} style={{ display: "flex", justifyContent: "center" }}>
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="lg"
                  bg="transparent"
                  _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                  maxW={{ base: "350px", sm: "150px", md: "200px", lg: "250px" }}
                  p={2}
                  mb={['42px', '64px', '48px']}
               
                >
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width="100%"
                    objectFit="cover"
                    height={{ base: "150px", sm: "180px", md: "200px" }}
                  />
                  <Box p={4}>
                    <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                      {slide.title}
                    </Text>
                    <Text
                      onClick={() => handleSlideClick(slide.id)}
                      style={{ cursor: "pointer" }}
                      mt={2}
                      fontSize="sm"
                      color="gray.500"
                      _hover={{ bg: "purple.100", color: "purple.900" }}
                    >
                      Clique para maiores detalhes.
                    </Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </Box>
      </Flex>
    );
    
    };

  


export default CarrosselBeleza