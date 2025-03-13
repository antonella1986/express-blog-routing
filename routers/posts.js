const express = require("express");
const router = express.Router();

//index
route.get("/" , (req,res) => {
    res.send("Lista dei post");
});

//show
route.get("/:id", (req, res) => {
    res.send(`Dettagli del post con id: ${postId}`);
});

//store
route.post("/", (req, res) => {
    res.send(`Creazione nuovo post`);
});

//update
route.put("/:id", (req, res) => {
    res.send(`Modifica totale del post con id: ${postId}`);
});

//modify
route.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post con id: ${postId}`);
});

//delete
route.delete("/:id", (req, res) => {
    res.send(`Eliminazione del post con id: ${postId}`);
});

module.exports = router;