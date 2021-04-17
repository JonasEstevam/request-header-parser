module.exports = {
  execute(req, res) {
    res.json({
      ipaddress: req.connection.remoteAddress,
      language: req.headers['accept-language'],
      software: req.headers['user-agent'],
    });
  },
};
