"use client";

// theme.ts
import { extendTheme } from "@chakra-ui/react";
import { Gabriela } from "next/font/google";

// Definir a fonte Gabriela
const gabriela = Gabriela({
  weight: ["400"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    heading: gabriela.style.fontFamily, // Use para headers
    body: gabriela.style.fontFamily,    // Use para o corpo do texto
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
        fontFamily: gabriela.style.fontFamily, // Aplicar fonte no body
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
        fontFamily: gabriela.style.fontFamily, // Fonte aplicada para parágrafos
      },
      footer: {
        maxW: "100%",
        mx: "auto",
        px: "1rem",
        bgGradient: "linear(to-r, #e6e6fa, #d8bfd8, #d699f5f4, #bdb5d5)",
        animation: "gradient 10s ease infinite",
      },
    },
  },
});

export default theme;

