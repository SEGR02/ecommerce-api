const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({ message: "Not email provided" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i.test(email)) {
      res.status(400).json({ message: "Incorrect email" });
    }

    if (!password) {
      res.status(400).json({ message: "Not password provided" });
    }

    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "ian.rosas@academlo.com",
        subjetc: "Email confirmation",
        html: "<h1>Bienvenido a la mejor app de streaming</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blanc'> enlace </a>",
      });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res
        .status(400)
        .json({ error: "Missing data", message: "Not email provided" });
    }
    if (!password) {
      res
        .status(400)
        .json({ error: "Missing data", message: "Not password provided" });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else if (result.correctEmail == false) {
      res.status(400).json({ message: "Incorrect email" });
    } else {
      res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
