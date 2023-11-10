var Mobiles = require('../models/mobile');
exports.mobile_list = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile list');
};
exports.mobile_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile detail: ' + req.params.id);
};
exports.mobile_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile create POST');
};
exports.mobile_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile delete DELETE ' + req.params.id);
};
exports.mobile_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile update PUT' + req.params.id);
};
