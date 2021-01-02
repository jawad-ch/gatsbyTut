import React from "react";
import Layout from "../components/Layout";
import Header from "../examples/Header";
import HeaderStatic from "../examples/HeaderStatic";
import { graphql } from "gatsby";

const example = ({
  data: {
    site: {
      info: {
        author,
        person: { name },
      },
    },
  },
}) => {
  return (
    <Layout>
      <p>hello from example page</p>
      <h1>pagequery author : {author}</h1>
      <h1>pagequery name : {name}</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  );
};
export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          age
          name
        }
      }
    }
  }
`;

export default example;
