// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

// todo deploy

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const mock721 = await ethers.deployContract("MockErc721");

  await mock721.waitForDeployment();

  const nftAddress = await mock721.getAddress();

  console.log(`deployed to ${nftAddress}`);

  var delayInMilliseconds = 10000; //10 second

  setTimeout(async function () {
    //your code to be executed after 10 second
    /* verify factory */
    await hre.run("verify:verify", {
      address: nftAddress,
    });
  }, delayInMilliseconds);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
