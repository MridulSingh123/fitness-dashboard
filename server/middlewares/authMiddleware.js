const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);

    if (!authHeader) {
      return res.status(401).json("No token");
    }

    // 🔥 Extract token in most flexible way
    const token = authHeader.replace("Bearer", "").trim();

    console.log("TOKEN:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.id;

    next();
  } catch (err) {
    console.log("ERROR:", err.message);
    res.status(401).json(err.message);
  }
};