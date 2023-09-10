const express = require("express")
const app = express()
port = 8080

app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello"})
})

app.listen(port, () => console.log(`server is listening on port: ${port}`))