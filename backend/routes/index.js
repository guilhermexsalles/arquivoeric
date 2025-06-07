const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const transactionController = require('../controllers/transactionController');

router.post('/users', userController.createUser );
router.post('/transactions', transactionController.createTransaction);
router.get('/transactions/:userId', transactionController.getTransactions);

module.exports = router;
