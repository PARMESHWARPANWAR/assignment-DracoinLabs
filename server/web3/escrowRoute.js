const express = require('express');
const { getEscrowStatus, buildDepositTx } = require('./escrowController');

const router = express.Router();

router.route('/escrow/:nftId').get(getEscrowStatus);
router.route('/escrow/:nftId/deposit-tx').post(buildDepositTx);

module.exports = router;
