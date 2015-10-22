var Bin = require('../models/Bin');

module.exports = {
  getIndex: function(req, res, next) {
    if (!req.isAuthenticated()) {
      res.render('main/index', { title: 'Bootbin' });
    } else {
      Bin.find({}, function(err, bins) {
        if (err) return next(err);
        var newBins = bins.filter(function(bin) {
          return bin.uid === req.user.uid;
        }).reverse();
        res.render('main/dashboard', { title: 'Bootbin', bins: newBins });
      });
    }
  },

  getAbout: function(req, res) {
    res.render('main/about', { title: 'About' });
  },

  getProtected: function(req, res) {
    res.render('main/protected', { title: 'Protected' });
  }
};
