const Contact = require("../models/contact-model");
const contact = async (req, res, err) => {
  try {
    const { username, email, message } = req.body;
    let contactData = await Contact.create({
      username,
      email,
      message,
    });
    res.send(contactData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = contact;
