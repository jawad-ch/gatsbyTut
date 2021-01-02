import React from "react";
import { StaticQuery, graphql } from "gatsby";

const ComponentName = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({
      site: {
        info: {
          title,
          person: { name },
        },
      },
    }) => (
      <>
        <br />
        <h1>staticquery : tut : {title}</h1>
        <h1>staticquery :name : {name}</h1>
      </>
    )}
  />
);

export default ComponentName;
