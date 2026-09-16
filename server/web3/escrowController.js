const { getEscrowStatus, buildDepositTx } = require('./escrowService');

exports.getEscrowStatus = async (req, res) => {
  try {
    const escrow = await getEscrowStatus(req.params.nftId);
    res.status(200).json({ success: true, escrow });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.buildDepositTx = async (req, res) => {
  try {
    const tx = await buildDepositTx(req.params.nftId, req.body.value);
    res.status(200).json({ success: true, tx });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
