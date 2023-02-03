const error = async (error, req, res, next) => {
  console.log(error.message);
  res.status(400).json(error.message);
};

module.exports = error;
