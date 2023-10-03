import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/navigation/Header";
import { Footer } from "../components/navigation/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <nav>
      <Header/>
      <Footer/>
    </nav>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
