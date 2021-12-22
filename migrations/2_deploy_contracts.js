const Token = artifacts.require("Token");
require("dotenv").config({ path: "../.env" });

module.exports = async (deployer) => {
  deployer.deploy(
    Token,
    process.env.TOKEN_SUPPLY,
    process.env.TOKEN_NAME,
    process.env.TOKEN_SYMBOL
  );
};
