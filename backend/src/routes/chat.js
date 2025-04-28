const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { generateResponse } = require('../utils/gemini');

router.post('/message', verifyToken, async (req, res) => {
  try {
    const { message, userDetails } = req.body;
    const response = await generateResponse(message, userDetails);
    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
