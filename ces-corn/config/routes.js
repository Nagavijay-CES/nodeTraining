module.exports.routes = {
    /**
     * Always return 200 on pre-flight checks
     */
    'OPTIONS /*': function(req, res) {return res.send(200);},
    'delete      /employee/:id':           'employeeCtrl.deleteAnEmployee',
};
console.log('Routes')