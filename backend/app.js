require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a API'})
})

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.qgn4tk2.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3001)
        console.log('API rodando na porta 3001')
    })
    .catch(err => console.log(err))


