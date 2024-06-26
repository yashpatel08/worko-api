const basicAuth = require('basic-auth');

const auth = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || user.name !== process.env.AUTH_USER || user.pass !== process.env.AUTH_PASS) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send('Authentication required.');
  }
  next();
};

module.exports = auth;