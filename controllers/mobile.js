const mobile = require('../models/mobile');
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
    console.log("detail" + req.params.id)
    try {
    result = await mobile.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//exports.mobile_delete = function(req, res) {
    exports.mobile_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await mobile.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        };
        
//res.send('NOT IMPLEMENTED: Mobile delete DELETE ' + req.params.id);
//};
exports.mobile_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
let toUpdate = await mobile.findById( req.params.id)
if(req.body.mobile_brand) toUpdate.mobile_brand = req.body.mobile_brand;
if(req.body.mobile_cost) toUpdate.mobile_cost = req.body.mobile_cost;
if(req.body.mobile_specification) toUpdate.mobile_specification = req.body.mobile_specification;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
    exports.mobile_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
            result = await mobile.findById( req.query.id)
            res.render('mobiledetail',{ title: 'Mobile Detail', toShow: result });
        }
        catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
};
exports.mobile_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('mobilecreate', { title: 'Mobile Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
