function selectDatabase(req, res, next) {
    const usertype = req.body.userType;
    console.log(usertype);
    switch (usertype) {
        case "user":
            req.usertype = "User";
            break;
        case "police":
            req.usertype = "Police";
            break;
        case "admin":
            req.usertype = "Admin";
            break;
        default:
            return res.status(400).json({ message: 'Invalid user type' });
    }
    next();
}

module.exports = selectDatabase;