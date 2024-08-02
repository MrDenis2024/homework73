const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;
const pass = 'password';

app.get('/encode/:id', (req, res) => {
    return res.send(Vigenere.Cipher(pass).crypt(req.params.id));
});

app.get('/decode/:id', (req, res) => {
    return res.send(Vigenere.Decipher(pass).crypt(req.params.id));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});