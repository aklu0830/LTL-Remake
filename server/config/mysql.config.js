const mysql = require('mysql');

const connection = mysql.createPool({
    password: "root",
    user: "root",
    database: "expressdb",
    host: "localhost",
    port: "3306"
});

let userDB = {};

userDB.all = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        })
    });
};

userDB.one = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users where id = ?',[id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

userDB.make = (firstName, lastName) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users(firstName, lastName) values(?,?)',[firstName, lastName],(err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

userDB.remove = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM users where id=?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = userDB;