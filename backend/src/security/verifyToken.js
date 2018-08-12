
const jwt = require('jsonwebtoken');
function verifyToken(req,res) {
  const token = req.headers.authorization;
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, 'keyboard cat 4 ever', function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.username;
  });
}
module.exports = verifyToken;