const jwt = require('jsonwebtoken');
const jwtSecret = 'qwerty';
const jwtOptions = {
    expiresIn: '2d'
}
exports.checkJWT = (req, res, next) => {
    if (!req.body.token) {
        const token = jwt.sign({ username: "Api user" }, jwtSecret, jwtOptions);
        res.json({ Status: "Auto Login successful", token });
    }

    try {
        const token = jwt.verify(req.body.token, jwtSecret);

        if (!token || !token.username) {
            res.status(403).json({ Error: { Message: "Invalid JWT"}});
        } else {
            next(res);
        }
    } catch (err) {
        console.log('Error verifying JWT:', err.message);
        res.status(403).json({ Error: { Message: "Invalid JWT"}});
    }
}