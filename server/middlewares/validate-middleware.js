const { signupSchema } = require("../validators/auth-validator");

const validate = () => async (req, res, next) => {
  try {
    const parseBody = await signupSchema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    console.log(err);
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };

    console.log(error);
    // res.status(400).json({ msg: message });
    next(error);
  }
};

module.exports = validate;
