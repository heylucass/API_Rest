const express = require('express');
const app = express();
const users = require('./users.json')

app.use(express.json());

app.get('/Users', function (req, res) {
    res.json(users);
});
app.get('/Users/:');

app.post('/Users');

app.put('/Users/:id');

app.delete('/Users/:id');

app.listen(3000, function() {
    console.log('Server is Running! ;)')
})
