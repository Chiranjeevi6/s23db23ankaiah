var express = require('express');
const mobile_controlers= require('../controllers/mobile');
var router = express.Router();
router.get('/', mobile_controlers.mobile_view_all_Page );
router.get('/detail', mobile_controlers.mobile_view_one_Page);
router.get('/create', mobile_controlers.mobile_create_Page);
module.exports = router;

