const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("Heres your router api")
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({ message: req.body })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message:"Page not found" })
    }
}

module.exports = { home, register };