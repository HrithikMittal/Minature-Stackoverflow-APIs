const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'Test': 'Question is successful'
    });
});

module.exports = router;