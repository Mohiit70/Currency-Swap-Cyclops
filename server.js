const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/app.js', express.static(path.join(__dirname, 'src', 'app.js')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});