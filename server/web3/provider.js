const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.config.env') });
const { ethers } = require('ethers');

const ESCROW_ABI = [
  'function isListed(uint256) view returns (bool)',
  'function purchasePrice(uint256) view returns (uint256)',
  'function escrowAmount(uint256) view returns (uint256)',
  'function buyer(uint256) view returns (address)',
  'function inspectionPassed(uint256) view returns (bool)',
  'function depositEarnest(uint256 _nftID) payable',
];

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const escrowContract = new ethers.Contract(
  process.env.ESCROW_CONTRACT_ADDRESS,
  ESCROW_ABI,
  provider
);

module.exports = { provider, escrowContract };
