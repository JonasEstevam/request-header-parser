module.exports = {
  execute(req, res) {
    res.json({
      ipaddress: req.hostname,
      language: req.headers['accept-language'],
      software: req.headers['user-agent'],
    });
  },
};
