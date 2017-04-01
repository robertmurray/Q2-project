const jwt = require('jsonwebtoken');

function middlewareVerify(req, res, next) {
  console.log("what is token",req.headers);

  jwt.verify(req.headers['token'], process.env.JWT_KEY, (err, payload) => {
      if (err) {
          res.set('Content-Type', 'text/plain');
          res.status(401).send("this user isn't authenticated");
          // console.log('am i here');
          // next();
      } else {
          next()
          // tokenId = payload.userId;
          // console.log(tokenId);
          // res.send(true);
      }
  });
}

module.exports = {
  middlewareVerify:middlewareVerify
}
