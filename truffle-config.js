require("dotenv").config({ path: "./.env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");

const ropsten_private_keys = [
  process.env.ROPSTEN_PRIVATE_KEY_1,
  process.env.ROPSTEN_PRIVATE_KEY_2,
];

const main_private_keys = [process.env.MAIN_PRIVATE_KEY];

const ropsten_infura_api = process.env.INFURA_ROPSTEN_API;
const mainnet_infura_api = process.env.INFURA_MAINNET_API;
const gas_fees = process.env.TOKEN_GAS_FEES;

module.exports = {
  /**
   * truffle test --network <network-name>
   */

  networks: {
    main: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: main_private_keys,
          providerOrUrl: mainnet_infura_api,
          numberOfAddresses: 1,
        }),
      network_id: 1,
      gas: gas_fees,
      confirmations: 2,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: ropsten_private_keys,
          providerOrUrl: ropsten_infura_api,
          numberOfAddresses: 2,
        }),
      network_id: 3,
      gas: gas_fees,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.10",
    },
  },
};
