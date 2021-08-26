import React from "react";
import { Container, Footer, Header } from "@components";
import { Meta } from "@components/meta";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Meta />
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
