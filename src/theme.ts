"use client";

import { extendTheme } from "@chakra-ui/react";
import { Gabriela } from "next/font/google";

const gabriela = Gabriela({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    heading: gabriela.style.fontFamily,
    body: gabriela.style.fontFamily,
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "@keyframes gradient": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
      body: {
        bgImage:
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/images/fundo2.png')",
        bgSize: ["auto", "cover"],
        bgRepeat: "no-repeat",
        bgPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: gabriela.style.fontFamily,
      },
      "#__next": {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        maxW: "auto",
      },
      p: {
        marginBottom: "1rem",
        fontFamily: gabriela.style.fontFamily,
      },
      footer: {
        w: "100vw",
        mx: 0,
        px: 0,
        bgGradient: "linear(to-r, #e6e6fa, #d8bfd8, #d699f5f4, #bdb5d5)",
        animation: "gradient 10s ease infinite",
      },
    },
  },
});

export default theme;
