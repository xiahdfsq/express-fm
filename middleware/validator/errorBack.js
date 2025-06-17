const {validationResult} = require('express-validator');

module.exports = (validator) => {
  return async (req, res, next) => {
    await Promise.all(validator.map(vali => vali.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ message: errors.array() })
    }
    next();
  };
};