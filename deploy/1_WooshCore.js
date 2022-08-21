const { ethers } = require("hardhat");
const { GasLogger } = require("../utils/helper.js");

require("dotenv").config();
const gasLogger = new GasLogger();

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Config
  console.log(`Deploying WooshCore... from ${deployer}`);

  let contract = await deploy("WooshCore", {
    from: deployer,
    args: [],
  });

  gasLogger.addDeployment(contract);
};

module.exports.tags = ["WooshCore"];
