import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/navigation/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <nav>
      <div></div>
      <Header/>
    </nav>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
