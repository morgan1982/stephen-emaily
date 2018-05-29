module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "You must Loggin" });
    }

    next(); // if the user is logged in the request continues.
};
