var Form = require("../models/form");

module.exports = function(req, res, next){
    Form.find({}, function(err, users){
        if(err) throw err;
        console.log('all readed');
       
        res.json({userinfos: users});
    });
};