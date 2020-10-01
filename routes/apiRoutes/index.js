const router = require('express').Router();

// api prepended to every Route
router.get('/', (_req, res) => {
  // eslint-disable-next-line indent
    res.send('Hello');
});

module.exports = router;
