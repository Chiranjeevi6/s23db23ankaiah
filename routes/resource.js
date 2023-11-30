var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api');
var mobile_controller = require('../controllers/mobile');
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
router.get('/', api_controller.api);
router.post('/mobile', mobile_controller.mobile_create_post);
router.delete('/mobile/:id', mobile_controller.mobile_delete);
router.put('/mobile/:id', mobile_controller.mobile_update_put);
router.get('/mobile/:id', mobile_controller.mobile_detail);
router.get('/mobile', mobile_controller.mobile_list);
router.get('/create',secured, mobile_controller.mobile_create_Page);
router.get('/delete',secured, mobile_controller.mobile_delete_Page);
router.get('/update',secured,mobile_controller.mobile_update_Page);
module.exports = router;
