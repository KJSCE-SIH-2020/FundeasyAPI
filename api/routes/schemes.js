const express = require('express');
const router = express.Router();
const auth = require('../middleware/authenticate');
const schemecontroller = require('../controllers/scheme');

router.get('/',schemecontroller.get_schemes_all);
router.get('/:sNo', schemecontroller.get_scheme_by_schemeno);
router.post('/', schemecontroller.add_scheme);

module.exports = router;
