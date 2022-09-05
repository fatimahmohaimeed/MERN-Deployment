const Controller = require('../controllers/controller');

module.exports = function(app){
    app.get ('/api/pirates', Controller.all);
    app.get ('/api/pirate/:id', Controller.getOne);
    app.post ('/api/pirate/new', Controller.createNew);
    // app.put ('/edit/:id', Controller.update);
    app.delete ('/api/delete/:id', Controller.delete);

}