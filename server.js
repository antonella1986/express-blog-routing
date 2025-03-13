const express = require('express');
const app = express();
const port = 3000;

const postId = req.params.id

//importazione router
const postsRouter = require("./routers/posts")

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello Bloggers!');
});

//middleware
app.use("/api/v1/posts", postsRouter);