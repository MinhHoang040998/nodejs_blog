const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({})
            .then((product) => {
                res.json(product)
            })
            .catch((err) => {
                res.status(400).json({error: err})
            });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
