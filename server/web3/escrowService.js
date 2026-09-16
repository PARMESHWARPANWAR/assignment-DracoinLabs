const { ethers } = require('ethers');
const { escrowContract } = require('./provider');

async function getEscrowStatus(nftId) {
  const [isListed, purchasePrice, escrowAmount, buyer, inspectionPassed] = await Promise.all([
    escrowContract.isListed(nftId),
    escrowContract.purchasePrice(nftId),
    escrowContract.escrowAmount(nftId),
    escrowContract.buyer(nftId),
    escrowContract.inspectionPassed(nftId),
  ]);

  return {
    nftId,
    isListed,
    purchasePrice: ethers.utils.formatEther(purchasePrice),
    escrowAmount: ethers.utils.formatEther(escrowAmount),
    buyer,
    inspectionPassed,
  };
}

async function buildDepositTx(nftId, value) {
  return escrowContract.populateTransaction.depositEarnest(nftId, {
    value: ethers.utils.parseEther(value),
  });
}

module.exports = { getEscrowStatus, buildDepositTx };
