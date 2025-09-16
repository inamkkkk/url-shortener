const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/shorten', urlController.shortenUrl);
router.get('/analytics/:urlCode', authMiddleware, urlController.getUrlAnalytics);

module.exports = router;