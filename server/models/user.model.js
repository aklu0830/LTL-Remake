const mysql = require('mysql');


const UserSchema = new mysql.createQuery({
    username: {type:String},
    firstName: {type: String},
    lastName: {type: String}
})

