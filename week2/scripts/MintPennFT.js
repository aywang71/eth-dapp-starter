const hre = require("hardhat");

const TOKEN_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //change this from original 
const TOKEN_URI = "ipfs://QmWCWBRfiam4h3E1QV7cfGhxrVW33YxUs7ooY5wZuHab1A"; //changed this from original 
const TOKEN_URI2 = "ipfs://Qmcwmq17MdUQCP9Qj7MXv6rtVj5w1Ksjs8H3kP8at5YfKd"

async function main() {
  // Load the contract to get its ABI
  const contract = require("../artifacts/contracts/PennFT.sol/PennFT.json");

  // Get a reference to the deployed contract
  const PennFT = await hre.ethers.getContractAt(contract.abi, TOKEN_ADDRESS);

  // Get the available (pre-seeded) hardhat wallets
  const wallets = await hre.ethers.provider.listAccounts();

  // Just use the first one
  const wallet = await hre.ethers.provider.getSigner(wallets[0]);

  // Mint a new NFT
  const tx = await PennFT.functions.mintNFT(wallet.getAddress(), TOKEN_URI);
  console.log(`Minted NFT with tx hash: ${tx.hash}`);

  //mint another NFT to a different wallet
  const wallet2 = await hre.ethers.provider.getSigner(wallets[1]);
  const tx2 = await PennFT.functions.mintNFT(wallet2.getAddress(), TOKEN_URI2);
  console.log(`Minted a second NFT with tx hash: ${tx2.hash}`)

  //get the number of NFTs minted
  const count = await PennFT.functions.tokenCount();
  console.log(`There are ${count} NFTs minted currently`);

  //get the URI of the first NFT
  const uri1 = await PennFT.functions.tokenURI(1);
  console.log(`name of the first NFT ${uri1}`);

  //get the URI of the second NFT
  const uri2 = await PennFT.functions.tokenURI(2);
  console.log(`name of the first NFT ${uri2}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
