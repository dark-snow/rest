const Router = require('express').Router;
// Dark Snow Data Modeler 
const Model = require('dark-snow-model');
// JSON Convention
const response = require('dark-snow-response');

function Rest(name,model,options) {
    let router = Router();
    this.model = model;
    router.get('/', (req, res) => {
        
    });

    return router;
    // router.get('/query/:query', (req, res) => {
    //     try {
    //         let q = JSON.parse(req.params.query);
    //         User.findByQuery(q).then((data) => {
    //             rcsres.json(res, data);
    //         }).catch((err) => {
    //             console.log(err);
    //             rcsres.error(res);
    //         });
    //     }
    //     catch (err) {
    //         console.log(err);
    //         rcsres.badRequest(res, "The query provided in not a valid JSON object");
    //     }
    // });

    // router.get('/:id', (req, res) => {
    //     if (req.params.id.length === 24) {
    //         User.findById(req.params.id).then((data) => {
    //             rcsres.json(res, data);
    //         }).catch((err) => {
    //             console.log('err');
    //             rcsres.error(res);
    //         });
    //     } else {
    //         rcsres.badRequest(res, "The id provided is not a valid ObjectID");
    //     }
    // });

    // router.put('/:id', (req, res) => {
    //     if (req.params.id.length === 24) {
    //         User.update(req.params.id,req.body).then((data) => {
    //             rcsres.accepted(res, data);
    //         }).catch((err) => {
    //             console.log('err');
    //             rcsres.error(res);
    //         });
    //     } else {
    //         rcsres.badRequest(res, "The id provided is not a valid ObjectID");
    //     }
    // });

    // router.delete('/:id', (req, res) => {
    //     if (req.params.id.length === 24) {
    //         User.delete(req.params.id).then((data) => {
    //             rcsres.accepted(res, data);
    //         }).catch((err) => {
    //             console.log('err');
    //             rcsres.error(res);
    //         });
    //     } else {
    //         rcsres.badRequest(res, "The id provided is not a valid ObjectID");
    //     }
    // });

}

module.exports = Rest;