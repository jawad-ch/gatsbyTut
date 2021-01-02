import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: outputs },
  } = data;
  return (
    <Layout>
      <section className="productSection">
        {outputs.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>{product.price}</span>{" "}
              </h3>
              <Link to={`/output/${product.slug}`}>more Details</Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct(filter: { title: { ne: "example" } }) {
      nodes {
        title
        price
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default Products;
