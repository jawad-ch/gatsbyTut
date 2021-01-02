const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      products: allContentfulProduct(filter: { title: { ne: "example" } }) {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/output/${product.slug}`,
      component: path.resolve(`src/templates/productTemplate.js`),
      context: {
        slug: product.slug,
      },
    });
  });
};
