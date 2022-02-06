const CracoAlias = require("craco-alias");
const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        { displayName: process.env.NODE_ENV !== "production" },
      ],
    ],
  },
};
