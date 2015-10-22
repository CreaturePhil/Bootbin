module.exports = {
  getIndex: function(req, res) {
    if (!req.isAuthenticated()) {
      res.render('main/index', { title: 'Bootbin' });
    } else {
      res.render('main/dashboard', { title: 'Bootbin' });
    }
  },

  getAbout: function(req, res) {
    res.render('main/about', { title: 'About' });
  },

  getProtected: function(req, res) {
    res.render('main/protected', { title: 'Protected' });
  }
};
