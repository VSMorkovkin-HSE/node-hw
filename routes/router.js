const express = require('express');
const db = require('../db/db.js');

const router = express.Router();

// создание объекта расхода
router.post('/', (req, res) => {
    if (!req.body.expense) {
        res.sendStatus(400)
        return
    }

    db.addExpense(req.body.expense)
    res.sendStatus(201)    
})

// получение всех трат
router.get('/', (req, res) => {
    res.send(db.getExpenses())
})


// поиск трат за конкретный день
router.post('/', (req, res) => {
   
})

