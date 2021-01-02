import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const getImages = graphql`
  {
    fixed: file(name: { eq: "img2" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(name: { eq: "img3" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const {
    fixed: {
      childImageSharp: { fixed: GatsbyImageSharpFixed },
    },
    fluid: {
      childImageSharp: { fluid: GatsbyImageSharpFluid_withWebp_tracedSVG },
    },
  } = useStaticQuery(getImages);
  return (
    <section className="images">
      <article className="singlImage">
        <h3>fixed image</h3>
      </article>
      <article className="singlImage">
        <h3>blur image</h3>
        <Image fixed={GatsbyImageSharpFixed} />
      </article>
      <article className="singlImage">
        <h3>fluid image</h3>
        <Image fluid={GatsbyImageSharpFluid_withWebp_tracedSVG} />
      </article>
    </section>
  );
};

export default Images;
