import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Casamento Thamiris e Vinicius",
  description: "Site de Casamento de Thamiris e Vinicius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Header/>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
