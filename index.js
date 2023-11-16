import { graphql } from "graphql";
import rootValue from "./reolver.js";
import schema from "./schema.js";

const source = `{hello}`;

const exeuteQuery = async () => {
  try {
    const response = graphql({ source, schema, rootValue });
    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
};

exeuteQuery();
