import React from "react";
import { Container, Footer, Header } from "@components";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
