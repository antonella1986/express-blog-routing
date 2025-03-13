const express = require('express');
const app = express();
const port = 3000;

const postId = req.params.id

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello Bloggers!');
});

//index
app.get("/posts" , (req,res) => {
    res.send("Lista dei post");
});

//show
app.get("posts/:id", (req, res) => {
    res.send(`Dettagli del post con id: ${postId}`);
});

//store
app.post("posts/", (req, res) => {
    res.send(`Creazione nuovo post`);
});

//update
app.put("posts/:id", (req, res) => {
    res.send(`Modifica totale del post con id: ${postId}`);
});

//modify
app.patch("posts/:id", (req, res) => {
    res.send(`Modifica parziale del post con id: ${postId}`);
});

//delete
app.delete("posts/:id", (req, res) => {
    res.send(`Eliminazione del post con id: ${postId}`);
});