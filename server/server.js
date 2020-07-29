const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '...', 'public');
const port = process.env.NODE_ENV || 3000;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, (PORT) => {
    console.log("Listening from port: ", PORT);
});