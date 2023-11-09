var Mobiles = require('../models/mobile');
exports.mobile_list = async function(req, res) {
    try{
        theMobile = await Mobiles.find();
        res.send(theMobile);
    } catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.mobile_detail = async function(req, res) {
    res.send('NOT IMPLEMENTED: Mobile detail: ' + req.params.id);
};
 
exports.mobile_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Mobiles();
    document.mobile_brand = req.body.mobile_brand;
    document.mobile_specification = req.body.mobile_specification;
    document.mobile_cost = req.body.mobile_cost;
    try{
        let result = await document.save();
        res.send(result);
    }catch(err){
        res.status(500);
        res.send(`{"error" : ${err}}`);
    }
};
exports.mobile_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile delete DELETE ' + req.params.id);
};
exports.mobile_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Mobile update PUT' + req.params.id);
};
exports.mobile_view_all_Page = async function(req, res) {
    try
    {
        theMobile = await Mobiles.find();
        res.render('mobile', { title: 'Mobile Search Results', results: theMobile });
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};