const express = require('express');
const connection = require('./connection');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    connection.query('select * from users',(err, result) => {
        err?res.send(err):res.send(result);
    }); 
});

app.post('/add', (req, res) => {
    const data = req.body;
    connection.query('INSERT INTO users SET ?', data, (err, result, fields) => {
        err?res.send(err):res.send(result);
    });
});

app.put('/edit/:id', (req, res) => {
    const data = [req.body.name, req.body.user_type, req.params.id];
    connection.query('UPDATE users SET name = ?, user_type = ? WHERE id = ?', data, (err, result, fields) => {
        err?res.send(err):res.send(result);
    });
});

app.patch('/edit/:id', (req, res) => {
    const data = [req.body.name, req.body.user_type, req.params.id];
    connection.query('UPDATE users SET name = ?, user_type = ? WHERE id = ?', data, (err, result, fields) => {
        if(err){
            throw err;
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    connection.query('DELETE FROM users WHERE id = ?', req.params.id, (err, result, fields) => {
        err?res.send(err):res.send(result);
    });
});

app.listen(4500);
