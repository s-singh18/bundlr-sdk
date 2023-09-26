import Bundlr from "@bundlr-network/client";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const bundlr = new Bundlr(
    "https://devnet.bundlr.network",
    "matic",
    process.env.PRIVATE_KEY,
    {
      providerUrl: `https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78`,
    }
  );

  console.log(`Connected to node, wallet address ${bundlr.address}`);

  //   const fundTx = await bundlr.fund(1e17);
  //   console.log(`Fund successful, amount funded = ${fundTx.quantity}`);

  const balance = await bundlr.getLoadedBalance();
  console.log(`account funded balance=${balance.toString()}`);
}

main();
