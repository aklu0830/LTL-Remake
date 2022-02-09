const express = require('express');
const database = require('../config/mysql.config')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        let results = await database.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req,res,next) => {
    try {
        let results = await database.one(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/create/:firstName/:lastName', async (req, res,next) => {
    try {
        let results = await database.make(req.params.firstName, req.params.lastName);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/delete/:id', async (req,res, next) => {
    try{
        let results = await database.remove(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;