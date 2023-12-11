import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: process.env?.ENVFILE });

const { API_URL_UK } = process.env;

const config: CodegenConfig = {
  schema: `${API_URL_UK}/graphql`,
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/__generated/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
        // TODO: enable persisted docs
        // persistedDocuments: true,
        // hashAlgorithm: "sha256",
      },
    },
  },
};

export default config;
