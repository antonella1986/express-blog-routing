const express = require("express");
const router = express.Router();

//index
route.get("/posts" , (req,res) => {
    res.send("Lista dei post");
});

//show
route.get("posts/:id", (req, res) => {
    res.send(`Dettagli del post con id: ${postId}`);
});

//store
route.post("posts/", (req, res) => {
    res.send(`Creazione nuovo post`);
});

//update
route.put("posts/:id", (req, res) => {
    res.send(`Modifica totale del post con id: ${postId}`);
});

//modify
route.patch("posts/:id", (req, res) => {
    res.send(`Modifica parziale del post con id: ${postId}`);
});

//delete
route.delete("posts/:id", (req, res) => {
    res.send(`Eliminazione del post con id: ${postId}`);
});

module.exports = router;