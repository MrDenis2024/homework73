const express = require('express');

const app = express();
const port = 8000;

app.get('/:id', (req, res) => {
    return res.send(`${req.params.id }`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});