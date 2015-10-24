var Bin = require('../models/Bin');

module.exports = {
  getNewBin: function(req, res) {
    res.render('bin/new', { title: 'New Bin' });
  },

  postNewBin: function(req, res, next) {
    req.assert('content', 'Bin cannot be empty.').notEmpty();
    req.assert('content', 'Bin is too big.').len(0, 100000);
    
    var errors = req.validationErrors();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/new');
    }

    var commonBin = {
      content: req.body.content,
      visibility: req.body.visibility || 'Public'
    };

    if (req.isAuthenticated()) {
      commonBin.uid = req.user.uid;
      commonBin.author = req.user.username;
    }

    var bin = new Bin(commonBin);

    bin.save(function(err) {
      if (err) return next(err);
      res.redirect('/' + bin.hash);
    });
  },

  getBin: function(req, res, next) {
    Bin.findOne({ hash: req.params.binhash }, function(err, bin) {
      if (err || !bin) return next(err);
      res.render('bin/content', { title: bin.hash, Bin: bin });
    });
  },

  removeBin: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.redirect('/' + req.body.hash); 
    }

    Bin.findOne({ hash: req.params.binhash }, function(err, bin) {
      if (err || !bin) return next(err);
      if (bin.uid !== req.user.username) {
        return res.redirect('/' + req.body.hash); 
      }

      Bin.remove({ hash: req.body.hash }, function(err) {
        if (err) return next(err);
        res.redirect('/');
      });
    });
  }
};
